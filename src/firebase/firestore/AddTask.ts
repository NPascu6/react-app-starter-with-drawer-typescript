import {db} from '../firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'

const handleSubmit = async (e: any, data: any) => {
    e.preventDefault()
    try {
        await addDoc(collection(db, 'tasks'), {
            title: data.title,
            description: data.description,
            completed: false,
            created: Timestamp.now()
        }).then(() => {
            console.log("Added:", data)
        })
    } catch (err) {
        alert(err)
    }
}
