import {useEffect, useState} from 'react';
import clsx from 'clsx';

export function Tabtext({description}) {
  let [active, setActive] = useState('first');

  return (
    <div className="w-full mx-auto mt-4  rounded">
      <ul id="tabs" className="inline-flex w-full px-1 pt-2 ">
        <li
          onClick={() => setActive('first')}
         className={clsx("px-4 py-2 font-semibold text-gray-800 rounded-t opacity-50", active=='first' && "border-b-2 border-blue-400 -mb-px")}
        >
          <a id="default-tab" href="#first">
        Description
          </a>
        </li>

        <li
          onClick={() => setActive('second')}
          className={clsx("px-4 py-2 font-semibold text-gray-800 rounded-t opacity-50", active == 'second' &&  "border-b-2 border-blue-400 -mb-px")}
        >
          <a href="#second">Additional Information</a>
        </li>
        <li
          onClick={() => setActive('third')}
          className={clsx("px-4 py-2 font-semibold text-gray-800 rounded-t opacity-50", active == 'third' &&  "border-b-2 border-blue-400 -mb-px")}
        >
          <a href="#third">Reviews</a>
        </li>
      </ul>

      <div id="tab-contents">
        <div id="first" 
        dangerouslySetInnerHTML={{__html: description}}
        className={clsx({hidden: active !== 'first'}, 'p-4')}>
     
        </div>
        <div id="second" className={clsx({hidden: active !== 'second'}, 'p-4')}>
          Second tab
        </div>
        <div id="third" className={clsx({hidden: active !== 'third'}, 'p-4')}>
          Third tab
        </div>
      </div>
    </div>
  );
}
