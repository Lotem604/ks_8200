// load users from localStorage
function loadUsers() {
  const usersJson = localStorage.getItem("users");
  return usersJson ? JSON.parse(usersJson) : [];
}

// save users to localStorage
function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
  return { success: true };
}

// register a new user
function registerUser(name, email, password) {
  const users = loadUsers();

  // Check if email already exists
  if (users.some((user) => user.email === email)) {
    return { success: false, message: "Email already exists" };
  }

  // Create new user object
  const newUser = {
    id: Date.now().toString(),
    name: name,
    email: email,
    password: password,
    createdAt: new Date().toISOString(),
  };

  // Add new user to array
  users.push(newUser);

  // Save updated users array
  saveUsers(users);

  return { success: true, user: newUser };
}

// login user
function loginUser(email, password) {
  const users = loadUsers();

  // Find user with matching email and password
  const user = users.find(
    (user) => user.email === email && user.password === password
  );

  if (user) {
    return { success: true, user: user };
  } else {
    return { success: false, message: "Invalid email or password" };
  }
}

// check if user is logged in
function isLoggedIn() {
  return localStorage.getItem("currentUser") !== null;
}

// get current user
function getCurrentUser() {
  const userJson = localStorage.getItem("currentUser");
  return userJson ? JSON.parse(userJson) : null;
}

// logout user
function logoutUser() {
  localStorage.removeItem("currentUser");
  window.location.href = "login.html";
}
