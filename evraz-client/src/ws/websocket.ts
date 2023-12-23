import { store } from "../redux";
import { addOpenForm } from "../redux/slices/open-forms-slice";


export default function () {
  const connection = new WebSocket('ws://d27e-83-97-115-19.ngrok-free.app/forms')

  connection.onopen = () => {
    console.log('ws', 'connected')
  }

  connection.onmessage = ({ data }) => {
    console.log(data)
    store.dispatch(addOpenForm(data))
  }

  connection.onerror = () => {
    console.log('ws', 'error acquired')
  }

  connection.onclose = () => {
    console.log('ws', 'closing')
  }
}