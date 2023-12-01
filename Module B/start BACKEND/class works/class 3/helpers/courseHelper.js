const sendResponseOfCourses = (isSuccessfull, message, data) => {
   return {
      isSuccessfull: isSuccessfull,
      message: isSuccessfull ? message : '',
      error: !isSuccessfull ? message : '',
      data: data
   }
}

module.exports = { sendResponseOfCourses }