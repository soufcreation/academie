import { formatHour, planningCategories, type PlanningSession } from "@/lib/planning";
import { colorStyles } from "./colors";

/**
 * `neutral` : aucune offre sélectionnée.
 * `included` / `excluded` : une offre est sélectionnée et ce cours y est,
 * ou non, compris.
 */
export type SessionState = "neutral" | "included" | "excluded";

const STATE_LABELS: Record<SessionState, string | null> = {
  neutral: null,
  included: "Inclus dans cette offre",
  excluded: "Non inclus dans cette offre",
};

type SessionCardProps = {
  session: PlanningSession;
  state: SessionState;
};

export default function SessionCard({ session, state }: SessionCardProps) {
  const { color } = planningCategories[session.category];
  const styles = colorStyles[color];
  const stateLabel = STATE_LABELS[state];

  return (
    <li
      className={`planning-card relative overflow-hidden border transition-[opacity,filter,transform,box-shadow] duration-300 ${styles.surface} ${
        state === "included" ? `ring-2 ring-white/70 scale-[1.02] ${styles.glow}` : ""
      } ${state === "excluded" ? "opacity-25 grayscale" : ""}`}
    >
      {/* Reflet des cours inclus */}
      {state === "included" && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/35 via-white/5 to-black/25"
        />
      )}

      <div className="relative">
        {/* Les horaires s'empilent sur petit écran, où « 12h30 – 13h15 » ne tient pas sur une ligne */}
        <p className="planning-time flex flex-col leading-tight font-semibold tracking-tight text-white/85 sm:flex-row sm:gap-1">
          <time dateTime={session.start}>{formatHour(session.start)}</time>
          <span aria-hidden="true" className="hidden sm:inline">
            –
          </span>
          <time dateTime={session.end}>{formatHour(session.end)}</time>
        </p>
        <p className="planning-label font-bold leading-tight text-white">{session.label}</p>
        {session.note && <p className="planning-note mt-0.5 leading-tight text-white/75">{session.note}</p>}
        {/* Le filtrage ne doit pas reposer sur la seule couleur */}
        {stateLabel && <span className="sr-only">{stateLabel}</span>}
      </div>
    </li>
  );
}
