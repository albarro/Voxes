import { addDoc, getDocs, collection, query, where } from "@firebase/firestore";
import { firestore } from "./firebase";

const collectionName = "usersVoxes";

export async function findUserByName(username) {
  const q = query(collection(firestore, collectionName), where("username", "==", username))
  const queryRe = await getDocs(q);

  let user;
  queryRe.forEach((doc) => {
    user = doc.data();
  });
  return user;
}

export async function saveUser(email, username, password) {
  let user = {
    email: email,
    username: username,
    password: password,
  };

  const ref = collection(firestore, collectionName);
  try {
    const userRef = await addDoc(ref, user);
    alert('Guardado con ID:' + userRef.id);
  } catch (err) {
    console.log(err);
  }
}

