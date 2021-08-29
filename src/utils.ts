export function mapSmilefjesToEmoji(smilefjes: string): string {
  if (smilefjes == "BLID") {
    return "😃";
  } else if (smilefjes == "NØYTRAL") {
    return "😐";
  } else {
    return "😠";
  }
}

export function mapSmilefjesScoreToEmoji(score: number): string {
  switch (score) {
    case 1:
    case 2:
      return "😃";
    case 3:
      return "😐";
    case 4:
      return "😠";
    default:
      return "😃";
  }
}
