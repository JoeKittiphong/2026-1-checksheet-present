import { useState } from 'react';
import A4Paper from '../components/A4Paper';
import TableHeader from '../components/TableHeader';
import InfoInputForm from '../components/InfoInputForm';
import SignBox from '../components/SignBox';

/**
 * CoverPage Component
 * หน้าปกของ Check Sheet รวม TableHeader, InfoInputForm, SignBox ภายใน A4Paper
 */
function CoverPage() {
    const [formData, setFormData] = useState({
        model: '',
        spec: '',
        machineNo: '',
        controllerNo: '',
        startDate: '',
        finishDate: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        option5: '',
        checkCode: '',
        checkName: '',
        approveCode: '',
        approveName: ''
    });

    return (
        <A4Paper innerPadding="p-4">
            {/* Main Title */}
            <h1 className="text-center text-3xl font-bold tracking-[0.3em] mb-8 text-black">
                COVER SHEET
            </h1>

            {/* Table Header */}
            <TableHeader
                docNumber="FAWB0005"
                version="6.0"
                dateOfIssue="7-Apr-2025"
                approvalDate="21-Apr-2025"
                issuedBy="ENGINEERING DIV."
                title="CHECK SHEET BODY ASS'Y"
            />

            {/* Info Input Form */}
            <InfoInputForm
                formData={formData}
                onChange={setFormData}
            />

            {/* Sign Boxes */}
            <SignBox
                formData={formData}
                onChange={setFormData}
            />

            {/* Footer */}
            <div className="absolute bottom-8 left-0 right-0 text-center">
                <p className="text-lg font-medium text-black m-0">Sodick ( Thailand ) Co., Ltd.</p>
            </div>
        </A4Paper>
    );
}

export default CoverPage;
