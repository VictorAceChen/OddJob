User.destroy_all
victor = User.create(username: "Victor", password: "password")
vincent = User.create(username: "Vincent", password: "password")
vanessa = User.create(username: "Vanessa", password: "password")
vincenzo = User.create(username: "Vincenzo", password: "password")
victoria = User.create(username: "Victoria", password: "password")
valentino = User.create(username: "Valentino", password: "password")
vlad = User.create(username: "Vlad", password: "password")
vladimir = User.create(username: "Vladimir", password: "password")

Job.destroy_all
job1 = Job.create(
	title: "Dishwasher",
	jobtype: "Part-Time",
	salary:	99999,
  location: "Brooklyn",
	description: "Responsible for maintaining the kitchen and dining areas in a clean and orderly condition. Washes, cleans, sanitizes and stores all dishes, glassware, utensils, pots, pans, and other equipment used to operate the kitchen and dining room areas. Cleans floors, equipment and other areas as assigned.",
  employer_id: valentino.id
	)

job2 = Job.create(
	title: "Cleaning Professionals",
	jobtype:	"Part-Time",
	salary:	900000,
  location: "Queens",
	description: "We have a part-time opening for a Cleaning Professionals - Part-Time. Must be able to work various shifts per week. Be authorized to work in the United States.",

	employer_id: vanessa.id
  )

job3 = Job.create(
	title: "Tutors",
	jobtype:	"Part-Time",
	salary:	25000,
  location: "Bronx",
	description: "We are looking for candidates that are as passionate about the growth and development of the precious children in our care as we are. keywords: teacher,teaching, preschool teacher, infant teacher, toddler teacher, two'steacher, pre-k teacher, prekindergarten teacher, early childhood teacher, earlychildhood educator, early childhood education, child development, child developmentassociate, daycare teacher, day care teacher, childcare teacher, child careteacher, full time teacher, part time teacher, experienced teacher, training",
	employer_id: victor.id
  )
