// student-info.js
'use client'; // Add this if you're using Next.js App Router (optional but safe)

import Link from 'next/link';
import React from 'react';

const StudentInfo = () => {
  return (
    <div>
      <h2>Name: Joy Wong</h2>
      <p>
        GitHub Repo:{' '}
        <Link href="https://github.com/joywong1228/cprg306-assignments" target="_blank" rel="noopener noreferrer">
          https://github.com/joywong1228/cprg306-assignments
        </Link>
      </p>
    </div>
  );
};

export default StudentInfo;
