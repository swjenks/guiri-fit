import type { Locale } from "../../i18n/config";
import type {
  GroupTrainingPricingTable,
  NutritionServiceRow,
  TrainingPackageRow,
} from "../siteData";

const packageNamesEs: Record<string, string> = {
  "Drop-in / Single": "Sesión suelta",
  "Drop-in": "Sesión suelta",
  "5-Pack": "Pack de 5",
  "10-Pack": "Pack de 10",
  "1×/week Monthly": "1×/sem. mensual",
  "2×/week Monthly": "2×/sem. mensual",
  "3×/week Monthly": "3×/sem. mensual",
  "1×/week": "1×/sem.",
  "2×/week": "2×/sem.",
  "3×/week": "3×/sem.",
  "Unlimited (5×/wk)": "Ilimitado (5×/sem.)",
};

function localizeRows(
  locale: Locale,
  rows: TrainingPackageRow[],
): TrainingPackageRow[] {
  if (locale === "en") return rows;
  return rows.map((row) => ({
    ...row,
    package: packageNamesEs[row.package] ?? row.package,
  }));
}

export function localizePersonalTrainingPackages(
  locale: Locale,
  source: {
    footnote: string;
    rows: TrainingPackageRow[];
  },
) {
  if (locale === "en") return source;
  return {
    footnote:
      "*Mensual = bloques de 4 semanas. Caducidad: pack 5 (90 días), pack 10 (120 días). Contáctame para planes de más de 3×/sem. mensual o para integrar entrenamiento en días libres.",
    rows: localizeRows(locale, source.rows),
  };
}

export function localizeGroupTrainingPackages(
  locale: Locale,
  source: {
    subtitle: string;
    footnote: string;
    totalColumnLabel: string;
    tables: GroupTrainingPricingTable[];
  },
) {
  if (locale === "en") return source;
  const tableTitles: Record<string, string> = {
    "Duo (2 people)": "Dúo (2 personas)",
    "Trio (3 people)": "Trío (3 personas)",
    "Quad (4 people)": "Cuatro (4 personas)",
  };
  return {
    subtitle: "2-4 personas • Menor coste por persona • Mejores resultados juntos",
    footnote:
      "*Mensual = bloques de 4 semanas. Caducidad: pack 5 (90 días), pack 10 (120 días). Contáctame para planes de más de 3×/sem. mensual o para integrar entrenamiento en días libres.",
    totalColumnLabel: "Total /persona",
    tables: source.tables.map((table) => ({
      ...table,
      title: tableTitles[table.title] ?? table.title,
      rows: localizeRows(locale, table.rows),
    })),
  };
}

export function localizeOutdoorTrainingPackages(
  locale: Locale,
  source: { subtitle: string; rows: TrainingPackageRow[] },
) {
  if (locale === "en") return source;
  return {
    subtitle:
      "Primavera y otoño • Máx. 12 participantes • Solo tarifas mensuales",
    rows: localizeRows(locale, source.rows),
  };
}

export function localizeNutritionPackages(
  locale: Locale,
  source: {
    subtitle: string;
    footnote: string;
    disclaimer: string;
    rows: NutritionServiceRow[];
  },
) {
  if (locale === "en") return source;
  return {
    subtitle:
      "Consulta educativa puntual • No es asesoramiento nutricional médico",
    footnote:
      "Seguimientos sueltos solo para clientes que completaron la revisión principal.",
    disclaimer:
      "Servicio educativo ofrecido por un profesional del fitness certificado con más de 25 años de experiencia en entrenamiento y fundamentos de nutrición. No soy dietista-nutricionista clínico. Las recomendaciones son pautas generales para adultos sanos y no diagnostican ni tratan enfermedades. Personas con diabetes, enfermedad renal, cardiovascular, trastornos alimentarios o embarazo deben consultar a un profesional sanitario antes de cambiar la dieta. Los resultados dependen de cada persona.",
    rows: [
      {
        service: "Revisión de hábitos alimentarios",
        whatsIncluded:
          "Sesión 60 min: auditoría de hábitos, educación en etiquetas, métricas corporales e IMC, ajustes personalizados según gustos",
        price: "€75",
      },
      {
        service: "Seguimiento (opcional)",
        whatsIncluded:
          "30 min, 2–4 semanas después: qué funcionó, qué costó, recomendaciones revisadas",
        price: "€30",
      },
      {
        service: "Ambos juntos",
        whatsIncluded: "Revisión principal + seguimiento",
        price: "€95",
      },
    ],
  };
}
