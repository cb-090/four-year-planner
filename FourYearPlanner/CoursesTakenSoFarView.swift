//
//  CoursesTakenSoFarView.swift
//  FourYearPlanner
//
//  Created by Dondi on 3/23/24.
//

import SwiftUI

let hardcodedCourses = [
    Course(id: "12345", subject: "CMSI", number: 1010),
    Course(id: "23456", subject: "MATH", number: 131),
    Course(id: "34567", subject: "FFYS", number: 1000),
]

struct CoursesTakenSoFarView: View {
    var body: some View {
        List() {
            ForEach(hardcodedCourses) {
                course in
                VStack {
                    Text(course.id)
                    Text(course.subject)
                    Text("\(course.number)")
                }
            }
        }
    }
}

#Preview {
    CoursesTakenSoFarView()
}
