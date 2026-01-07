import { useState } from 'react'
import CoverPage from './sheet/CoverPage'
import Page1 from './sheet/Page1'
import Page2 from './sheet/Page2'
import Page3 from './sheet/Page3'
import Page4 from './sheet/Page4'
import Page5 from './sheet/Page5'
import Page6 from './sheet/Page6'
import Page7 from './sheet/Page7'
import Page8 from './sheet/Page8'
import Page9 from './sheet/Page9'
import Page10 from './sheet/Page10'
import Page11 from './sheet/Page11'
import Page12 from './sheet/Page12'
import Page13 from './sheet/Page13'
import Page14 from './sheet/Page14'
import Page15 from './sheet/Page15'
import Page16 from './sheet/Page16'
import Page17 from './sheet/Page17'
import Page18 from './sheet/Page18'
import Page19 from './sheet/Page19'
import Page20 from './sheet/Page20'
import Page21 from './sheet/Page21'
import Page22 from './sheet/Page22'
import Pagination from '../components/Pagination'

// รายการหน้าทั้งหมดของ Sheet 1
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

function Sheet1() {
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

export default Sheet1
