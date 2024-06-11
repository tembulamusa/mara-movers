import React, { useState, useEffect, useCallback, useContext } from 'react';
import {HiOutlinePlus} from "react-icons/hi";

import { 
    getFromLocalStorage, 
    setLocalStorage 
} from '../utils/local-storage';
import PerfectScrollbar from 'react-perfect-scrollbar';
import makeRequest from "../utils/fetch-request";
import { Context } from "../../context/store";


import 'react-perfect-scrollbar/dist/css/styles.css';

const SideBar = (props) => {
  const [state, dispatch] = useContext(Context);

    return (
        <aside
      className="sidebar flex flex-col w-54 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-white"
    >
      <div className="sidebar-header flex items-center justify-cener py-4 px-4">
        <div className="inline-flex">
          <a href="#" className="inline-flex flex-row items-center">
            <svg className="w-20 h-20 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M11.757 2.034a1 1 0 01.638.519c.483.967.844 1.554 1.207 2.03.368.482.756.876 1.348 1.467A6.985 6.985 0 0117 11a7.002 7.002 0 01-14 0c0-1.79.684-3.583 2.05-4.95a1 1 0 011.707.707c0 1.12.07 1.973.398 2.654.18.374.461.74.945 1.067.116-1.061.328-2.354.614-3.58.225-.966.505-1.93.839-2.734.167-.403.356-.785.57-1.116.208-.322.476-.649.822-.88a1 1 0 01.812-.134zm.364 13.087A2.998 2.998 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879.586.585.879 1.353.879 2.121s-.293 1.536-.879 2.121z"
                clip-rule="evenodd"
              />
            </svg>
            <span className="leading-10 text-2xl font-bold ml-1 uppercase">Procurement</span>
          </a>
        </div>
      </div>
      <div className="sidebar-content px-4 py-6 ">
        <ul className="flex flex-col w-full">
          <li className="my-px">
            <a
              href="/dashboard"
              className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-700 bg-gray-100"
            >
              <span className="flex items-center justify-center text-lg">
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </span>
              <span className="ml-3">Dashboard</span>
            </a>
          </li>
          <li className="my-px">
            <span className="flex font-medium text-sm text-gray-700 px-4 my-4 mb-3 uppercase">Memos</span>
          </li>
          <li className="my-px"  onClick={() => dispatch({type:"SET", key:"shownewmemomodal", payload:true})}>
            <a
              href="#"
              className="flex flex-row items-center h-10 px-3 rounded-lg text-green-400 font-medium hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="flex items-center justify-center text-3xl ">
                <HiOutlinePlus />
              </span>
              <span className="ml-3">Add Memo</span>
            </a>
          </li>
          <li className="my-px">
            <a
              href="/memos"
              className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="flex items-center justify-center text-lg text-gray-400">
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
              </span>
              <span className="ml-3">Memos</span>
              <span
                className="flex items-center justify-center text-xs text-purple-500 font-semibold bg-purple-100 h-6 px-2 rounded-full ml-auto"
              >5</span>
            </a>
          </li>
          

          <li className="my-px">
            <a
              href="/quotations"
              className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="flex items-center justify-center text-lg text-gray-400">
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                  />
                </svg>
              </span>
              <span className="ml-3">Quotations</span>
              <span
                className="flex items-center justify-center text-xs text-red-500 font-semibold bg-red-100 h-6 px-2 rounded-full ml-auto"
              >5</span>
            </a>
          </li>
          
          {/* Separator line */}
          <li className='border-t border-gray-200 bg-gray-100 h-2 border-b my-2 mt-4'></li>

          <li className="my-px">
            <span className="flex font-medium text-sm text-gray-700 px-4 my-4 mb-3 uppercase">Users</span>
          </li>
          
          <li className="my-px">
            <a
              href="/suppliers"
              className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="flex items-center justify-center text-lg text-gray-400">
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </span>
              <span className="ml-3">Suppliers</span>
              <span
                className="flex items-center justify-center text-xs text-gray-500 font-semibold bg-gray-100 h-6 px-2 rounded-full ml-auto"
              >10</span>
            </a>
          </li>
          <li className="my-px">
            <a
              href="/admins"
              className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="flex items-center justify-center text-lg text-gray-400">
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </span>
              <span className="ml-3">Admins</span>
            </a>
          </li>
          
          {/* Separator line */}
          <li className='border-t border-gray-200 bg-gray-100 h-2 border-b my-3 mt-4'></li>

                    
          <li className="my-px">
            <a
              href="#"
              className="flex flex-row items-center h-10 px-3 rounded-lg text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <span className="flex items-center justify-center text-lg text-gray-400">
                <svg
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </span>
              <span className="ml-3">Services</span>
              <span
                className="flex items-center justify-center text-xs text-gray-500 font-semibold bg-gray-100 h-6 px-2 rounded-full ml-auto"
              >10</span>
            </a>
          </li>
          
        </ul>
        
      </div>
      <div className='mt-auto p-2 bg-purple-500 text-white text-center font-bold '>Logout</div>
    </aside>
    )
}
export default React.memo(SideBar);
