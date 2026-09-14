/* Shared skeleton definition — loaded by both the studio and the solver, so
   the two can never drift apart. Offsets are metres, in the parent's frame.
   Legs hang off `hips`, not `pelvis`, so torso lean does not drag them. */
const SKELETON = {
  hips:      { parent:null,       offset:[0, 0,     0    ] },
  pelvis:    { parent:'hips',     offset:[0, 0.02,  0    ] },
  spine:     { parent:'pelvis',   offset:[0, 0.14,  0    ] },
  chest:     { parent:'spine',    offset:[0, 0.17,  0    ] },
  neck:      { parent:'chest',    offset:[0, 0.15,  0    ] },
  head:      { parent:'neck',     offset:[0, 0.10,  0    ] },

  clavL:     { parent:'chest',    offset:[0, 0.115,-0.045] },
  shoulderL: { parent:'clavL',    offset:[0, 0.005,-0.135] },
  elbowL:    { parent:'shoulderL',offset:[0,-0.285, 0    ] },
  wristL:    { parent:'elbowL',   offset:[0,-0.255, 0    ] },
  handL:     { parent:'wristL',   offset:[0,-0.045, 0    ] },

  clavR:     { parent:'chest',    offset:[0, 0.115, 0.045] },
  shoulderR: { parent:'clavR',    offset:[0, 0.005, 0.135] },
  elbowR:    { parent:'shoulderR',offset:[0,-0.285, 0    ] },
  wristR:    { parent:'elbowR',   offset:[0,-0.255, 0    ] },
  handR:     { parent:'wristR',   offset:[0,-0.045, 0    ] },

  hipL:      { parent:'hips',     offset:[0,-0.03, -0.095] },
  kneeL:     { parent:'hipL',     offset:[0,-0.44,  0    ] },
  ankleL:    { parent:'kneeL',    offset:[0,-0.42,  0    ] },
  footL:     { parent:'ankleL',   offset:[0,-0.055, 0    ] },

  hipR:      { parent:'hips',     offset:[0,-0.03,  0.095] },
  kneeR:     { parent:'hipR',     offset:[0,-0.44,  0    ] },
  ankleR:    { parent:'kneeR',    offset:[0,-0.42,  0    ] },
  footR:     { parent:'ankleR',   offset:[0,-0.055, 0    ] },
};

/* ── Anatomical rules ──────────────────────────────────────────────────
   These are the contract. They are NOT limits on the raw Euler numbers —
   the arm's rx/ry/rz come out of a solved basis and individually mean
   nothing anatomically. Every rule below is a GEOMETRIC quantity measured
   from world joint positions, which is the only representation that
   survives a change of solver.                                          */
const RULES = {
  rom: {
    elbowBend:     { range:[  0, 150], of:'elbow flexion, 0 = straight' },
    kneeBend:      { range:[  0, 155], of:'knee flexion, 0 = straight'  },
    shoulderElev:  { range:[  0, 178], of:'upper arm vs. the torso axis' },
    neckDev:       { range:[-60,  60], of:'head vs. the chest axis'      },
    spineFlex:     { range:[  0,  38], of:'thoracolumbar flexion'        },
    hipAbduct:     { range:[-12,  42], of:'thigh out of the sagittal plane' },
  },
  /* no joint may move more than this between two consecutive samples —
     the cheapest possible detector for an IK branch flip */
  maxStepDeg: 26,
  /* mirrored joints must stay mirrored about z = 0 */
  symmetryTol: 0.004,
  /* a planted foot sits on its support surface, not through it and not
     hovering. Measured perpendicular to that surface, so it reads the same
     on a flat floor and on the pitched footplate of a seated row. */
  groundTol: [-0.012, 0.030],
  /* ...and lies FLAT against it. A sole meeting an angled plate at 30° is
     balanced on its heel edge, which passes a distance check and looks
     absurd. */
  soleTilt: 7,
  /* limbs may not pass through the torso */
  torsoClearance: 0.115,
  /* the IK must not be clamped at full extension — a clamped target means
     the pose asked for something the arm cannot reach, and the hand will
     silently land somewhere other than where the exercise says */
  reachHeadroom: 0.004,
};

/* ── Collision model ───────────────────────────────────────────────────
   The body as capsules, and the bar as a segment. Nothing may pass through
   anything else. This is the general form of "the movement must not go
   through the body" — it does not care which exercise or which limb.     */
const BODY = [
  { name:'head',   a:'head',  b:'head',   r:0.095 },   // skull only — the neck has its own capsule
  { name:'neck',   a:'chest', b:'neck',   r:0.062 },
  /* The trunk is an ELLIPSE, not a circle: the meshes were always drawn that
     way and only the collision capsule pretended a trunk is as deep as it is
     wide, which put a phantom 13cm of body where the elbows want to travel.

     It is also TWO capsules, for exactly the same reason. The figure has a
     waist — the mesh narrows to 10.0 x 11.2 at the spine, and the comment
     next to it in the studio says so in as many words ("this was 0.145 — as
     wide as the chest") — but the collision model ran one chest-sized
     capsule from the hips all the way up. Everything crossing the waist was
     therefore tested against a ribcage: on the seated row it is what made a
     forearm running from a tucked-back elbow to a handle at the belly read
     as 7cm inside the body, which is how the elbows ended up flared. Two
     capsules, each taking its radii from the mesh it stands for. */
  /* The trunk is now TWO capsules, split at the waist. The top end is
     exactly where the single capsule's used to be — the chest joint — so
     nothing above the split changed; only the region below it stops being
     tested at ribcage width. The split height is where the mesh's chest
     blob and its narrower spine blob cross over, t = 1.72 up the 16cm
     hips->spine bone, which is 0.68 of the way up spine->chest. */
  { name:'torso',  a:'spine', b:'chest',  r:0.120, rz:0.150, t0:0.68 },
  { name:'waist',  a:'hips',  b:'spine',  r:0.106, rz:0.117, t1:1.72 },
  { name:'thighL', a:'hipL',  b:'kneeL',  r:0.082 },
  { name:'thighR', a:'hipR',  b:'kneeR',  r:0.082 },
  { name:'shinL',  a:'kneeL', b:'ankleL', r:0.055 },
  { name:'shinR',  a:'kneeR', b:'ankleR', r:0.055 },
  { name:'upperL', a:'shoulderL', b:'elbowL', r:0.058 },
  { name:'upperR', a:'shoulderR', b:'elbowR', r:0.058 },
  { name:'foreL',  a:'elbowL', b:'wristL', r:0.048 },
  { name:'foreR',  a:'elbowR', b:'wristR', r:0.048 },
];
/* limb-vs-body pairs worth testing (skip anything jointed together) */
const SELF_PAIRS = [
  ['upperL','torso'], ['upperR','torso'], ['foreL','torso'], ['foreR','torso'],
  ['upperL','waist'], ['upperR','waist'], ['foreL','waist'], ['foreR','waist'],
  ['upperL','head'],  ['upperR','head'],  ['foreL','head'],  ['foreR','head'],
  ['thighL','thighR'],
];
const BAR = { halfLength: 1.075, r: 0.016 };

Object.assign(RULES, {
  /* a moving bar must clear every body capsule by this much … */
  barClearance: 0.015,
  /* … except where the exercise says contact is the point. Touching is
     allowed there; sinking into the body by more than this is not. */
  contactPenetration: 0.022,
  /* limbs must clear each other and the torso */
  selfClearance: 0.010,
  /* …except on limb/body pairs an exercise declares as contact. A handle
     rowed to the abdomen really is pressed INTO the body: the hand is on
     the skin, and a rigid capsule whose axis must stay a forearm-radius
     clear of a rigid trunk cannot express that. 3cm is the compression a
     capsule model has to be allowed to fake — and ONLY the compression:
     the structural overlap an arm has at rest is handled separately, by
     SEAT below, and added to this. Anything past the two together is a
     limb inside a ribcage, and is still rejected. */
  selfContactPenetration: 0.030,
  /* collisions are also tested at the midpoint between samples, because a
     bar can pass cleanly through a head between two clean frames */
  sweepSubdivisions: 3,
  /* a planted foot may not slide more than this over a whole rep */
  footDrift: 0.012,
  /* the knee may not fall this far medially inside the hip->ankle line */
  kneeValgus: 0.020,
  /* the knee may not end up further inside the foot at the bottom of a
     descent than it was at the top */
  kneeTrackTol: 0.010,
  /* How far the elbow may sit medial to the shoulder while the hand is
     lateral to it. Some medial drift is real — in a front rack the elbows
     genuinely come inside the shoulder line, because a deeply folded arm's
     swivel circle sits nearly perpendicular to the shoulder-to-hand line.
     Past 10cm it is not a rack any more, it is a forearm across the chest. */
  armPlane: 0.100,
});

/* ── The arm's seat in the trunk ───────────────────────────────────────
   An arm's ROOT is inside the trunk capsule, and no pose can move it out.
   The shoulder joint sits 18.0cm from the midline (13.5 shoulder + 4.5
   clavicle). The trunk ellipse is tested by squashing z by r/rz, so that
   joint's effective distance from the trunk axis is 18.0 x r/rz — while
   clearing the trunk needs r + rLimb. The difference is how far inside the
   capsule an arm hanging DEAD STRAIGHT DOWN at the side already is, before
   it has done anything wrong: 3.4cm for the upper arm against the ribcage,
   2.4cm for the forearm, and nothing at all at the waist, which is narrow
   enough to clear.

   SELF_PAIRS already skips "anything jointed together" for exactly this
   reason. The arm is the limb jointed to the trunk at a point the trunk's
   own capsule contains, so it gets that much for free — computed, not
   typed, and not declared per lift, because it is a fact about the skeleton
   and not about any exercise. A lift that declares contact gets its
   compression budget ON TOP of the seat: the seat is what the bones force,
   the budget is what soft tissue gives. They are different things and they
   were being conflated into one number, which is why the seated row's
   elbows could not tuck to the ribs without tripping a rule. */
const SEAT = {};
{
  const shoulderZ = SKELETON.clavR.offset[2] + SKELETON.shoulderR.offset[2];
  for (const trunk of BODY.filter(c => c.name === 'torso' || c.name === 'waist'))
    for (const limb of ['upper', 'fore']) {
      const r = BODY.find(c => c.name === limb + 'R').r;
      SEAT[limb + '|' + trunk.name] =
        Math.max(0, (trunk.r + r) - shoulderZ * (trunk.r / trunk.rz));
    }
}

if (typeof module !== 'undefined') module.exports = { SKELETON, RULES, BODY, SELF_PAIRS, BAR, SEAT };
else { window.SKELETON = SKELETON; window.RULES = RULES; window.BODY = BODY; window.SEAT = SEAT; }
