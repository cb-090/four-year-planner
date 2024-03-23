//
//  ContentView.swift
//  FourYearPlanner
//
//  Created by Dondi on 3/23/24.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack {
            NavigationView {
                SignUpView()
            }
        }
        .padding()
    }
}

#Preview {
    ContentView()
}
