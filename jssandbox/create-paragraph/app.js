// How to create
import {
  collection,
  addDoc,
  doc,
  getDoc,
  query,
  where,
  getDocs,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

async function createPost() {
  const post = {
    title: "title",
    description: "description",
  };
  await addDoc(collection(db, "posts"), post);
}

// How to read all
async function getAllPosts() {
  const data = await getDocs(collection(db, "posts"));
  const posts = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
}

//How to read by Id
async function getPostById(Id) {
  const docRef = doc(db, "posts", Id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    const post = docSnap.data();
  }
}

//How to read by query
async function getPostByUid(Uid) {
  const postCollectionUidRef = await query(
    collection(db, "posts"),
    where("uid", "==", Uid)
  );
  const data = await getDocs(postCollectionUidRef);
  const posts = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
}

// How to update
async function updatePost(Id) {
  const docRef = doc(db, "posts", Id);
  const newPost = {
    title: "Land a $400k job",
    description: "Finish Frontend Simplified",
  };
  await updateDoc(docRef, newPost);
}

// How to delete
async function deletePost(Id) {
  const docRef = doc(db, "posts", Id);
  await deleteDoc(docRef);
}
