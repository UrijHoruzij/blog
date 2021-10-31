const dateFormat = date => {
  let month =
    "января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря".split(
      ","
    )
  const newDate = new Date(date)
  const dateStr =
    newDate.getDate() +
    " " +
    month[newDate.getMonth()] +
    ", " +
    newDate.getFullYear()
  return dateStr
}

export default dateFormat
