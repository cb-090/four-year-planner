//
//  Course.swift
//  FourYearPlanner
//
//  Created by Dondi on 3/23/24.
//

import Foundation

struct Course: Hashable, Codable, Identifiable {
    var id: String
    var subject: String
    var number: Int
}
