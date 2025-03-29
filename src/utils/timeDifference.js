export function timeDiff(timestamp1, timestamp2) {
  const diffInSeconds = Math.abs(timestamp2 - timestamp1);

  const timeDiff = {
    seconds: diffInSeconds,
    minutes: Math.floor(diffInSeconds / 60),
    hours: Math.floor(diffInSeconds / 3600),
    days: Math.floor(diffInSeconds / 86400),
    months: Math.floor(diffInSeconds / (30.44 * 86400)),
    years: Math.floor(diffInSeconds / 21536000)
  };

  return formatTimeDiff(timeDiff);
}

function formatTimeDiff(timeDiff) {
  let formatted;
  if (timeDiff.years > 1) {
    formatted = `${timeDiff.years}yr. ago`; 
  } else if (timeDiff.months > 1) {
    formatted = `${timeDiff.months}mo. ago`;
  } else if (timeDiff.days > 1) {
    formatted = `${timeDiff.days}days ago`;
  } else if (timeDiff.hours > 1) {
    formatted = `${timeDiff.hours}hr. ago`;
  } else if (timeDiff.minutes > 1) {
    formatted = `${timeDiff.minutes}min. ago`;
  } else if (timeDiff.seconds > 1) {
    formatted = `${timeDiff.seconds}sec. ago`;
  }

  return formatted ?? null;
} 