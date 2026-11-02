/**
 * Simulation & Animation Types - Ready for future physics, biomechanics,
 * and exercise physiology interactive simulations (Canvas / Three.js / WebGL / SVG).
 */

export type SimulationDomain =
  | 'biomechanics' // Kinematics, kinetics, levers, center of gravity
  | 'exercise_physiology' // Energy systems, heart rate zones, VO2 max, muscle contraction
  | 'training_load' // Overload principle, supercompensation curves
  | 'motor_learning' // Reaction times, coordination loops
  | 'sports_nutrition'; // Caloric balance, nutrient timing

export interface SimulationControl {
  id: string;
  name: string;
  type: 'slider' | 'toggle' | 'select';
  min?: number;
  max?: number;
  step?: number;
  defaultValue: number | string | boolean;
  unit?: string;
}

export interface SimulationStructure {
  id: string;
  courseId: string;
  title: string;
  domain: SimulationDomain;
  description: string;
  controls: SimulationControl[];
  renderMode: 'canvas_2d' | 'interactive_svg' | 'webgl_3d';
  isReady: boolean;
}
