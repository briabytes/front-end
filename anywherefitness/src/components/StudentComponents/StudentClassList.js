import React from 'react';
import { Link } from 'react-router-dom';
import StudentClassCard from './StudentClassCard';

function StudentClassList({ myClasses }) {
    return (
      <div className="classList">
        {
          myClasses.map(cls => (
            <Link key={cls.id} to={`/classes/${cls.id}`}>
              <StudentClassCard cls={cls} />
            </Link>
          ))
        }
      </div>
    );
  }
  
export default StudentClassList;