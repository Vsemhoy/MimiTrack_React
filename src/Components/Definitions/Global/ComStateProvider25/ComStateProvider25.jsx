import React, { createContext, useState } from 'react';
// StateProvider.js

export const StateContext = createContext();

export function StateProvider({ children }) {
  const [state, setState] = useState(
    {   text: '', 
        target_user_id: 0,
        target_claim_id: 0,
        target_task_id: 0,
        target_release_id: 0,
        target_comment_id: 0,
        target_question_id: 0,
        target_tab_id: 0,
        current_location: '',
        location: '', // Defines jsx template
   });

  return (
    <StateContext.Provider value={{ state, setState }}>
      {children}
    </StateContext.Provider>
  );
}