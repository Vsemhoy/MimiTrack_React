import { EnterOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';


const TaskListRowCard = (props) => {

    const [item, setItem] = useState(props.data);
    const [level, setLevel] = useState(props.level ? props.level : 0);

  return (
    <div className={`mi-flat-task-wrapper mi-level-${level}`}>
        <div className={'mi-flat-task'}>
            <div className={'mi-flat-task-hierarchy'}>
                {/* <div style={{transform: 'scale(-1, 1)'}}><EnterOutlined /></div> */}
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={'mi-flat-task-content'}>
                {item.title}
            </div>
            <div className={'mi-flat-task-options'}>
                OHOHO
            </div>
        </div>
        {item?.children?.length > 0 && (
            <div className={'mi-flat-task-childrens'}>
                {item.children.map((subItem)=>(
                    <TaskListRowCard data={subItem} level={level + 1} />
                ))}
            </div>
        )}
    </div>
  );
};

export default TaskListRowCard;