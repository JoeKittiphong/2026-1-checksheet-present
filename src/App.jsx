import { useState } from 'react'
import CoverPage from './pages/CoverPage'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'
import Page5 from './pages/Page5'
import Page6 from './pages/Page6'
import Page7 from './pages/Page7'
import Page8 from './pages/Page8'
import Page9 from './pages/Page9'
import Page10 from './pages/Page10'
import Page11 from './pages/Page11'
import Page12 from './pages/Page12'
import Page13 from './pages/Page13'
import Page14 from './pages/Page14'
import Page15 from './pages/Page15'
import Page16 from './pages/Page16'
import Page17 from './pages/Page17'
import Page18 from './pages/Page18'
import Page19 from './pages/Page19'
import Page20 from './pages/Page20'
import Page21 from './pages/Page21'
import Page22 from './pages/Page22'
import Pagination from './components/Pagination'

// รายการหน้าทั้งหมด
const pages = [
  { id: 1, name: 'Cover', component: CoverPage },
  { id: 2, name: 'Page 1', component: Page1 },
  { id: 3, name: 'Page 2', component: Page2 },
  { id: 4, name: 'Page 3', component: Page3 },
  { id: 5, name: 'Page 4', component: Page4 },
  { id: 6, name: 'Page 5', component: Page5 },
  { id: 7, name: 'Page 6', component: Page6 },
  { id: 8, name: 'Page 7', component: Page7 },
  { id: 9, name: 'Page 8', component: Page8 },
  { id: 10, name: 'Page 9', component: Page9 },
  { id: 11, name: 'Page 10', component: Page10 },
  { id: 12, name: 'Page 11', component: Page11 },
  { id: 13, name: 'Page 12', component: Page12 },
  { id: 14, name: 'Page 13', component: Page13 },
  { id: 15, name: 'Page 14', component: Page14 },
  { id: 16, name: 'Page 15', component: Page15 },
  { id: 17, name: 'Page 16', component: Page16 },
  { id: 18, name: 'Page 17', component: Page17 },
  { id: 19, name: 'Page 18', component: Page18 },
  { id: 20, name: 'Page 19', component: Page19 },
  { id: 21, name: 'Page 20', component: Page20 },
  { id: 22, name: 'Page 21', component: Page21 },
  { id: 23, name: 'Page 22', component: Page22 },
];

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  // ดึง component ของหน้าปัจจุบัน
  const CurrentPageComponent = pages[currentPage - 1]?.component;

  return (
    <div>
      {/* แสดงหน้าปัจจุบัน */}
      {CurrentPageComponent && <CurrentPageComponent />}

      {/* Pagination */}
      <Pagination
        currentPage={currentPage}
        totalPages={pages.length}
        onPageChange={setCurrentPage}
      />
    </div>
  )
}

export default App
