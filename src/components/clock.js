import {useEffect, useState, useCallback} from 'react';

export const ClockUnit = ({lang='en-US', unit={}, st = '2-digit', offset =0, tol=1, pad=false})=>{

      const [time,setTime] = useState(null);

      const tic = useCallback(()=>{
            let theLang= lang;
            const toc = new Date(new Date().getTime()+offset);
            let newTime;
            let ops = {};
            if (unit === 'ms'){
                newTime = Math.floor((toc%1000)/1000*Math.pow(10,tol)).toString().padStart(tol,'0');
            }else{
                if (Object.getPrototypeOf(unit) === Object.prototype){ ops = unit;}
                else if (unit === 'period') {
                    theLang =  'en-US';
                    ops ={ hour:'2-digit', hour12:true }
                }
                else { ops = { [unit]:st }; }
                newTime = toc.toLocaleString(theLang, ops);
                if (unit === 'period' || unit === 'hour') {
                    let parts = newTime.split(' ');
                    newTime = parts[ unit === 'hour' ? 0 : parts.length-1]
                }
            }
            if ( time !== newTime ) {  setTime(newTime);}
        },[lang, offset, st, time, tol, unit]);

    useEffect(()=>{
        const clean = setInterval(tic,1);
        return ()=>{ clearInterval(clean);}
    },[tic]) ;

      return <>{time && pad ? time.padStart(pad,'0') : time}</>
}