# Students

- id [ObjectId]
- matricule [String]
- first_name [String]
- last_name [String]
- level [Number] // Niveau
- sector [Number] // Filière

# Accounts

- id [ObjectId]
- email [String]
- password [String]
- role [String] => [ADMIN | STUDENT]

# Orientations

- id [ObjectId]
- question [Number]
- value [Number]

# Exams

- id [ObjectId]
- name [String]
- start_date [Date]
- end_date [Data]

# Grades

- id [ObjectId]
- student_id [ObjectId]
- exam_id [ObjectId]
- subject [String]
- score [Number]
