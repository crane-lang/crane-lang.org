import htm from "https://esm.sh/htm";
import { h, render } from "https://esm.sh/preact";
import { useEffect, useState } from "https://esm.sh/preact/hooks";

const html = htm.bind(h);

const SECOND_IN_MS = 1_000;
const MINUTE_IN_MS = 60 * SECOND_IN_MS;
const HOUR_IN_MS = 60 * MINUTE_IN_MS;
const DAY_IN_MS = 24 * HOUR_IN_MS;

const durationToParts = (duration) => {
  if (duration <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(duration / DAY_IN_MS);
  duration %= DAY_IN_MS;

  const hours = Math.floor(duration / HOUR_IN_MS);
  duration %= HOUR_IN_MS;

  const minutes = Math.floor(duration / MINUTE_IN_MS);
  duration %= MINUTE_IN_MS;

  const seconds = Math.floor(duration / SECOND_IN_MS);

  return { days, hours, minutes, seconds };
};

const adventOfCraneStart = new Date("2023-12-01T05:00:00.000Z");

const App = () =>
  html`<${Countdown} to=${adventOfCraneStart} now=${new Date()} />`;

const Countdown = ({ to, now }) => {
  const [ms, setMs] = useState(Math.max(to - now, 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setMs((ms) => ms - SECOND_IN_MS);
    }, SECOND_IN_MS);

    return () => clearInterval(interval);
  }, []);

  const duration = durationToParts(ms);

  const days = duration.days.toString().padStart(2, "0");
  const hours = duration.hours.toString().padStart(2, "0");
  const minutes = duration.minutes.toString().padStart(2, "0");
  const seconds = duration.seconds.toString().padStart(2, "0");

  return html`<div className="jet-brains-mono">
    ${days}d ${hours}h ${minutes}m ${seconds}s
  </div>`;
};

render(html`<${App} />`, document.getElementById("advent-of-crane"));
