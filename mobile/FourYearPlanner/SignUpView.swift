//
//  SignUpView.swift
//  FourYearPlanner
//
//  Created by Dondi on 3/23/24.
//

import SwiftUI

struct SignUpView: View {
    @State var name = ""
    @State var major = ""
    @State var graduationYear = ""

    var body: some View {
        VStack {
            HStack {
                Text("Name")
                TextField("Name", text: $name)
            }

            HStack {
                Text("What’s your major?")
                TextField("Major", text: $major)
            }

            HStack {
                Text("Graduation Year")
                TextField("Graduation Year", text: $graduationYear)
            }

            NavigationLink {
                CoursesTakenSoFarView()
            } label: {
                Text("Sign me up!")
            }
        }
    }
}

#Preview {
    SignUpView()
}
