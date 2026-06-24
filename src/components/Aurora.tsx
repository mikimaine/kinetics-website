/** Fixed atmospheric backdrop: drifting brand-color light field, faint grid, film grain, vignette. */
export default function Aurora() {
  return (
    <div className="aurora" aria-hidden="true">
      <div className="aurora-blob ab-red" />
      <div className="aurora-blob ab-sea" />
      <div className="aurora-blob ab-deep" />
      <div className="aurora-grid" />
      <div className="noise" />
      <div className="vignette" />
    </div>
  );
}
