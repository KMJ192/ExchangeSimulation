import React from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { useEffect } from 'react';
import { paceCaseUserPatch, pageCaseLogined } from './PageCase';
import { RouteChildrenProps } from 'react-router-dom';

interface ResponseData{
    useremail : string;
    message : string;
}

// eslint-disable-next-line import/no-anonymous-default-export
export default function(Component : React.ComponentType, option : boolean,pageCase : string | null = null) {
    function Authentication(props: RouteChildrenProps){
        useEffect(() => {
            if(option){                
                (async () => {
                    const request : ResponseData = await axios.get('/user')
                        .then((response : AxiosResponse) => response.data)
                        .catch((err : AxiosError) => err);
                    
                    if(pageCase === pageCaseLogined 
                        && request.useremail
                        && request.message === "success"){
                            props.history.push('/');
                    }else if(pageCase === paceCaseUserPatch
                        && request.message === "none jwt"){
                            props.history.push('/');
                        }
                })();
            }
        }, [props.history, props.location]);

        return <Component/>;
    }
    
    return Authentication;
}