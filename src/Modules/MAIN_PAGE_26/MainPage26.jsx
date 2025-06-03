import React from "react";
import Her from "../../Components/HybridEmbeddedRouter/Her";
import { Button } from "antd";




const MainPage26 = (props) => {

    const states = ['A', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B', 'B'];


    return (
        <div>
            <div className={'mimi-layout-container'}>
                <div>

                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <div className={'mimi-slot-stack'}>
                        {states.map((item, index)=>(
                            <div className={'mimi-slot'}>
                                <div className={'mimi-slot-header'}>
                                    <div>{index}</div>
                                    <div className={'mi-leftalign'}>
                                        Создание миграций для приложения MimiTrack
                                    </div>
                                    <div>A</div>
                                </div>
                                <div className={'mimi-slot-body'}>
                                    <div className={'mi-leftalign'}>
                                        Необходимо забабашить миграции для пользователей, для слотов, для проектов, для связей пользователей
                                    </div>
                                </div>
                            </div>

                        ))}
                    </div>

                </div>
                <div>
                    
                </div>
            </div>
        </div>
    )
};

export default MainPage26;