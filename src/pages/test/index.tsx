import * as React from 'react'
import Ball from '../../components/Ball';
const useCallback = React.useCallback;
const memo = React.memo;

    
function TestPage():React.ReactElement<any> {

    const getUrlParams = useCallback(
        (url, name) => {
            let urlList = url.split('?');
            let paramsList = urlList[urlList.length - 1].split('&');
            for (let i = 0; i < paramsList.length; ++i) {
                let item = paramsList[i].split('=');
                if (item[0] == name) return item[1];
            }
            return null;
        },
        [],
    )

    return <div className="test" onClick={() => {
        console.log(getUrlParams(window.location.href, 'token'))
    }}>
        <Ball name={'Electron & React'} />
    </div>
}

export default memo(TestPage);