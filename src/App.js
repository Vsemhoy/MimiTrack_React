import logo from './logo.svg';
// import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useContext, useEffect } from 'react';
import './Assets/style/theme.css';
import './Assets/style/layout.css';
import MainPage26 from './Modules/MAIN_PAGE_26/MainPage26';

// import { StateContext, StateProvider } from './Components/ComStateProvider25/ComStateProvider25';
// import { ParseRoute } from './Components/HybridEmbeddedRouter/RouteParser';
import ClaimListPage from './Modules/MIMITRACK_25/CLAIMS_25/ClaimListPage25';
import ReleaseListPage from './Modules/MIMITRACK_25/RELEASES_25/ReleaseListPage25';
import QuestionListPage from './Modules/MIMITRACK_25/QUESTIONS_25/QuestionListPage25';
import SettingsPage from './Modules/MIMITRACK_25/SETTINGS_25/SettingsPage25';

// import Her from './Components/HybridEmbeddedRouter/Her';
import { Button } from 'antd';
import ClaimPage from './Modules/MIMITRACK_25/CLAIMPAGE_25/ClaimPage25';
import ExecutorListPage from './Modules/MIMITRACK_25/EXECUTORLIST_25/ExecutorListPage25';
import ClaimEditorPage25 from './Modules/MIMITRACK_25/CLAIMEDITORPAGE_25/ClaimEditorPage25';
import ExecutorEditorPage from './Modules/MIMITRACK_25/EXECEDITOR_25/ExecutorEditorPage25';
import TaskEditorPage from './Modules/MIMITRACK_25/TASKEDITORPAGE_25/TaskEditorPage25';
import ReleaseEditorPage from './Modules/MIMITRACK_25/RELEASEEDITOR_25/ReleaseEditorPage25';
import ReleasePage from './Modules/MIMITRACK_25/RELEASEPAGE_25/ReleasePage25';

import './Assets/style/theme.css';
import './Assets/style/layout.css';
import MenuBox from './Components/MimiTemplate/components/MENUBOX/MenuBox';
import TaskListPage25 from './Modules/MIMITRACK_25/TASKAPP/TASKLIST_25/TaskListPage25';
import Statusbar14 from './Components/MimiTemplate/commoncom/STATUSBAR/Statusbar14';

function App() {
  // const { state, setState } = useContext(StateContext);


  // useEffect(() => {
  //   const handleLocationChange = () => {
  //     const searchParams = new URLSearchParams(window.location.search);
  //     const locationParam = searchParams.get('location');
      
  //     if (locationParam) {
  //       const path = decodeURIComponent(searchParams);
  //       const newState = ParseRoute(path);

  //       console.log('newState:', newState);
  //       setState(newState);
  //     }
  //   };

  //   // Обрабатываем начальный URL
  //   handleLocationChange();

  //   // Подписываемся на изменения истории
  //   window.addEventListener('popstate', handleLocationChange);
    
  //   return () => {
  //     window.removeEventListener('popstate', handleLocationChange);
  //   };
  // }, []);


  return (
    <div className="App">
      <div>
        <MenuBox />
      </div>

      {/* {state.location === '' && <MainPage26 />}
      {state.location === 'home' && <MainPage26 />}

      {state.location === 'mtrack' && <ReleaseListPage />}

      {state.location === 'claims' && <ClaimListPage />}
      {state.location === 'claimpage' && <ClaimPage />}
      {state.location === 'claimeditor' && <ClaimEditorPage25 />}

      {state.location === 'executor' && <ExecutorListPage />}
      {state.location === 'execeditor' && <ExecutorEditorPage />}

      {state.location === 'taskeditor' && <TaskEditorPage />}
      {state.location === 'releaseeditor' && <ReleaseEditorPage />}
      
      {state.location === 'releases' && <ReleaseListPage />}
      {state.location === 'questions' && <QuestionListPage />}
      {state.location === 'settings' && <SettingsPage />}


      {state.location === 'releasepage' && <ReleasePage />} */}


      
        <Routes>
            <Route index element={<MainPage26 />} />
          {/* <Route path="/" element={<MainPage26 />}>
          </Route> */}

            <Route path="/releases" element={<ReleaseListPage />} />
            <Route path="/claims" element={<ClaimListPage />} />
            <Route path="/claims/{item_id}" element={<ClaimEditorPage25 />} />


            <Route path="/execeditor" element={<ExecutorListPage />} />
            <Route path="/execeditor/{item_id}" element={<ExecutorEditorPage />} />
            <Route path="/tasks/{item_id}" element={<TaskEditorPage />} />
            <Route path="releases/{item_id}" element={<ReleaseEditorPage />} />
            <Route path="questions" element={<QuestionListPage />} />
            <Route path="settings" element={<SettingsPage />} />

            <Route path="/taskup" element={<TaskListPage25 />} />
            {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>

        <Statusbar14 />
      
    </div>
  );
}

export default App;
