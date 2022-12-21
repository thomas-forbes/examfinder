import { createTheme, ThemeProvider } from '@mui/material'
import splitbee from '@splitbee/web'
import Link from 'next/link'
import { useState } from 'react'

import BottomBar from '../components/BottomBar'
import Choices from '../components/Choices'
import PageHead from '../components/PageHead'
import PaperList from '../components/PaperList'
import StyledLink from '../components/StyledLink'

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
})

export default function App() {
  const [papers, setPapers] = useState<any>([])
  return (
    <>
      <PageHead />
      <ThemeProvider theme={theme}>
        {/* MAIN COL */}
        <div className="flex min-h-screen flex-col items-center space-y-6 p-4 pt-6">
          {/* TEXT */}
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-5xl font-bold">
              Easily Search Irish Past Papers
            </h1>
            <p className="text-slate-300">
              Built by a{' '}
              <StyledLink
                href="https://thomasforbes.com/"
                target="_blank"
                onClick={() => splitbee.track('thomasforbes.com top')}
                className="hover:text-slate-300"
              >
                student
              </StyledLink>{' '}
              for everyone
            </p>
          </div>
          {/* CHOICES */}
          <Choices papers={papers} setPapers={setPapers} />
          {/* FORMULA + TABLES */}
          <Link
            href="https://www.examinations.ie/misc-doc/BI-EX-7266997.pdf"
            target="_blank"
            className="no-underline"
            rel="noreferrer"
            onClick={() => splitbee.track('Formula and Tables')}
          >
            <div className="rounded-lg bg-orange-500 px-4 py-3 font-semibold shadow-xl shadow-stone-900 duration-150 hover:scale-105">
              <h3 className="text-xl text-white">Formula and Tables Book</h3>
            </div>
          </Link>
          {/* PAPERS */}
          <PaperList papers={papers} />
          {/* DIVIDER */}
          <div className="flex-grow" />
          {/* FOOTER */}
          <BottomBar />
        </div>
      </ThemeProvider>
    </>
  )
}
