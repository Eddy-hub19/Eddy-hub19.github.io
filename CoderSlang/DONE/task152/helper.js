export const checkAccess = (user, password) => {
  if(user.role === 'admin') {
    return user.password === password;
  }else{
    return false;
  }
}

export const grantAccess = (name) => {
  console.log(`Congratulations, ${name}. Access granted.`)
}

export const denyAccess = (name) => {
  console.log(`Sorry, ${name}. Access denied.`)
}