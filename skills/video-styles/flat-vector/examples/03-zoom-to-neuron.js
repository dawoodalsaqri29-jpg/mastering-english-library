/* @example
visualIntent: Zoom through scales from a person, into the brain, down to a single firing neuron; Momo narrates from the corner and the labels land on their words.
narration: Inside your head, your brain is buzzing with eighty six billion neurons, each one firing tiny electric signals.
*/
const ctx = S.scene(root, { world: "none" });
const tBrain = S.when("brain", 0.3), tNeuron = S.when("neurons", 0.6);
S.zoomThrough(ctx, [
  { illus: "body", label: "You", world: "sky", size: 0.4, focus: [0, -145] },
  { illus: "brain", label: "Brain", world: "body" },
  { illus: "neuron", label: "Neuron", world: "micro" },
], { times: [tBrain - 1.1, tNeuron - 1.1], dur: 1.3, K: 6 });
const y = V.isPortrait ? ctx.H * 0.8 : ctx.H * 0.86;
S.tag(ctx, "Brain", { x: ctx.W / 2, y, at: tBrain + 0.1, color: "pink" }).exit(tNeuron - 1, "shrink");
S.tag(ctx, "86 billion neurons", { x: ctx.W / 2, y, at: tNeuron + 0.1, color: "violet" });
S.burst(ctx, ctx.W / 2, ctx.H / 2, tNeuron + 0.2, { radius: 300, count: 18, parent: ctx.front });
const momo = S.creature("momo", { parent: ctx.front, x: ctx.W * (V.isPortrait ? 0.2 : 0.1), y: ctx.H * (V.isPortrait ? 0.9 : 0.82), size: 190, look: [1, -0.6] });
momo.enter(0.2, "pop").float(8, 3.5, 3).feel("think", tBrain).feel("wow", tNeuron);
