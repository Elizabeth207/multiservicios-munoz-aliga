import type { LucideIcon } from 'lucide-react';
import {
  BatteryCharging,
  KeyRound,
  Cpu,
  Lightbulb,
  MonitorSmartphone,
  Radio,
  ScanLine,
  ShieldCheck,
  Siren,
  Sparkles,
  Satellite,
  Wrench,
  Zap,
} from 'lucide-react';

export const categoryIcons: Record<string, LucideIcon> = {
  'llaves-cerrajeria': KeyRound,
  electricidad: Zap,
  seguridad: Siren,
  iluminacion: Lightbulb,
  tecnologia: MonitorSmartphone,
};

export const serviceGroupIcons: Record<string, LucideIcon> = {
  electricidad: BatteryCharging,
  'llaves-seguridad': KeyRound,
  instalaciones: ShieldCheck,
};

export const specialtyIcons: Record<string, LucideIcon> = {
  'llaves-cerrajeria': KeyRound,
  electricidad: ScanLine,
  seguridad: Radio,
  iluminacion: Sparkles,
  tecnologia: Cpu,
};

const serviceIconByKeyword: Array<{ match: RegExp; icon: LucideIcon }> = [
  { match: /alarma/i, icon: Siren },
  { match: /gps/i, icon: Satellite },
  { match: /alternador/i, icon: BatteryCharging },
  { match: /arrancador/i, icon: Zap },
  { match: /chip|programación|control|llave|chapa/i, icon: KeyRound },
  { match: /foco|neblinero|luz/i, icon: Lightbulb },
  { match: /pantalla/i, icon: MonitorSmartphone },
  { match: /diagnóstico|eléctric/i, icon: ScanLine },
  { match: /cierre|centralizado/i, icon: ShieldCheck },
];

export function getServiceIcon(serviceName: string, groupId: string): LucideIcon {
  for (const { match, icon } of serviceIconByKeyword) {
    if (match.test(serviceName)) return icon;
  }
  return serviceGroupIcons[groupId] ?? Wrench;
}

export function getProductIcon(productName: string, categoryId: string): LucideIcon {
  for (const { match, icon } of serviceIconByKeyword) {
    if (match.test(productName)) return icon;
  }
  return categoryIcons[categoryId] ?? Wrench;
}
