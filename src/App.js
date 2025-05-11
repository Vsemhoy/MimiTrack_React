import logo from './logo.svg';
import './App.css';


import { useContext, useEffect } from 'react';
import './Assets/style/theme.css';
import './Assets/style/layout.css';
import MainPage26 from './Modules/MAIN_PAGE_26/MainPage26';

import { StateContext, StateProvider } from './Components/ComStateProvider25/ComStateProvider25';
import { ParseRoute } from './Components/HybridEmbeddedRouter/RouteParser';
import ClaimListPage from './Modules/MIMITRACK_25/CLAIMS_25/ClaimListPage25';
import ReleaseListPage from './Modules/MIMITRACK_25/RELEASES_25/ReleaseListPage25';
import QuestionListPage from './Modules/MIMITRACK_25/QUESTIONS_25/QuestionListPage25';
import SettingsPage from './Modules/MIMITRACK_25/SETTINGS_25/SettingsPage25';

import Her from './Components/HybridEmbeddedRouter/Her';
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

function App() {
  const { state, setState } = useContext(StateContext);


  useEffect(() => {
    const handleLocationChange = () => {
      const searchParams = new URLSearchParams(window.location.search);
      const locationParam = searchParams.get('location');
      
      if (locationParam) {
        const path = decodeURIComponent(searchParams);
        const newState = ParseRoute(path);

        console.log('newState:', newState);
        setState(newState);
      }
    };

    // Обрабатываем начальный URL
    handleLocationChange();

    // Подписываемся на изменения истории
    window.addEventListener('popstate', handleLocationChange);
    
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);


  return (
    <div className="App">
      <h1>{state.location}</h1>
    <div>
        <Her href={'home'}>
          <Button >HOME</Button>
      </Her>
      <Her href={'claims'}>
          <Button >CLAIMS</Button>
      </Her>
      <Her href={'releases'}>
          <Button >RELEASES_25</Button>
      </Her>
      <Her href={'executor'}>
          <Button >EXECUTOR_25</Button>
      </Her>
      <Her href={'questions'}>
          <Button >QUESTIONS_25</Button>
      </Her>
      <Her href={'settings'}>
          <Button >SETTINGS_25</Button>
      </Her>
    </div>

      {state.location === '' && <MainPage26 />}
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


      {state.location === 'releasepage' && <ReleasePage />}

    </div>
  );
}

export default App;
