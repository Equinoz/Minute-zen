// Formatage de l'affichage de l'heure

export const displayDuration = seconds => {
  let m = Math.floor(seconds / 60);
  let h = Math.floor(m / 60);
  m = m % 60;
  let s = seconds % 60;

  if (h > 0)
    return ((h > 9) ? h : "0" + h) + ":" + ((m > 9) ? m : "0" + m);
  else
    return ((m > 9) ? m : "0" + m) + ":" + ((s > 9) ? s : "0" + s);
}