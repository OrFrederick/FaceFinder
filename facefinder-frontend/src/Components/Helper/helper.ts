export function formatTitle(title: string) {
  title = title.replace('.mp4', ' Uhr').replace('--', ' ');
  let date = new Date(title.split(' ')[0]);

  const time = title.split(' ')[1].replace('-', ':');

  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();

  return dd + '.' + mm + '.' + yyyy + ' ' + time + ' Uhr ';
}
