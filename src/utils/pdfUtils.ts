import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import type { AnalysisResult } from '../types';

export const generatePDF = async (result: AnalysisResult) => {
    const element = document.getElementById('results');
    if (!element) return;

    try {
        const canvas = await html2canvas(element, {
            scale: 2,
            useCORS: true,
            logging: false,
            backgroundColor: '#f9fafb' // bg-gray-50
        });

        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });

        const imgWidth = 210;
        const pageHeight = 297;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;

        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;

        while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }

        pdf.save(`resume-analysis-${result.final_score_percent}-score.pdf`);
    } catch (error) {
        console.error('PDF generation failed:', error);
        alert('Failed to generate PDF. Please try again.');
    }
};
