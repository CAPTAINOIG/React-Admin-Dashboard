import React, { createContext, useEffect, useState } from 'react'
import {useMediaQuery} from 'react-responsive'
import {FullScreen, useFullScreenHandle} from 'react-full-screen'


export const AppContext = createContext()

const DashboardContext =({children})=>{
    const isTablet = useMediaQuery({ query: '(max-width: 768px)' })
    const [sideBarOpen, setSideBarOpen] = useState(isTablet ? false : true)
    const handle = useFullScreenHandle();
    const [theme, setTheme] = useState('light')


    const toggleSideBar =()=>{
        setSideBarOpen(true)
    }


    useEffect(() => {
      if(theme === 'dark'){
        document.documentElement.classList.add("dark")
      } else{
        document.documentElement.classList.remove("dark")
      }
    }, [theme])

    return (
        <AppContext.Provider value={{isTablet, handle, sideBarOpen, theme, setTheme, setSideBarOpen, toggleSideBar}}>
             {children}
        </AppContext.Provider>
    )
    
}
export default DashboardContext