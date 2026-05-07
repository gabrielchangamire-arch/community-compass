import {
  Apple,
  Award,
  Baby,
  BookOpen,
  Brain,
  Briefcase,
  Bus,
  Compass,
  Dumbbell,
  Globe,
  GraduationCap,
  HeartPulse,
  Home,
  Library,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Smile,
  Sparkles,
} from "lucide-react";

const MAP = {
  Apple,
  Award,
  Baby,
  BookOpen,
  Brain,
  Briefcase,
  Bus,
  Compass,
  Dumbbell,
  Globe,
  GraduationCap,
  HeartPulse,
  Home,
  Library,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Smile,
  Sparkles,
};

export default function Icon({ name, size = 22, ...rest }) {
  const Cmp = MAP[name];
  if (!Cmp) return null;
  return <Cmp size={size} aria-hidden="true" {...rest} />;
}
