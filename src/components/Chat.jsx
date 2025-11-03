// import { useState } from 'react';

// export default function Chat({ contact }) {
//   const [text, setText] = useState('');
//   return (
//     <section className="chat">
//       <textarea
//         value={text}
//         placeholder={'Chat to ' + contact.name}
//         onChange={e => setText(e.target.value)}
//       />
//       <br />
//       <button>Send to {contact.email}</button>
//     </section>
//   );
// }


export function createEncryptedConnection(roomId) {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log('✅ 🔐 Connecting to "' + roomId + '... (encrypted)');
    },
    disconnect() {
      console.log('❌ 🔐 Disconnected from "' + roomId + '" room (encrypted)');
    }
  };
}

export function createUnencryptedConnection(roomId) {
  // A real implementation would actually connect to the server
  return {
    connect() {
      console.log('✅ Connecting to "' + roomId + '... (unencrypted)');
    },
    disconnect() {
      console.log('❌ Disconnected from "' + roomId + '" room (unencrypted)');
    }
  };
}
