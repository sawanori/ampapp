import React from 'react'
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
const App = () => {
  return (
    <div>
      <h1>テスト</h1>
      <AmplifySignOut />
    </div>
  )
}

export default App
