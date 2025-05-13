import React from 'react';
import Link from 'next/link';
import StudentInfo from './student-info';

export default function Page() {
    return (
        <main>
            <h1>Shopping List</h1>
            <StudentInfo />
            <br />
            <Link href="../" className="hover:text-blue-400" >Back to home</Link>
            {/* "../" is basically like "/" in here bcoz its only one page ahead*/}
        </main>
    );
}

