USE [marketingagency]
GO
/****** Object:  Table [dbo].[Attachment]    Script Date: 19/03/2018 09:08:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Attachment](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](255) NOT NULL,
	[Type] [nvarchar](255) NOT NULL,
	[TaskID] [int] NOT NULL,
	[Path] [nvarchar](255) NOT NULL,
	[CreatedBy] [int] NULL,
	[CreatedTime] [datetime] NULL,
 CONSTRAINT [PK_Attachment] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CheckList]    Script Date: 19/03/2018 09:08:15 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CheckList](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](255) NOT NULL,
	[TaskID] [int] NOT NULL,
	[ChangedBy] [int] NULL,
	[CreatedBy] [int] NULL,
	[ChangedTime] [datetime] NULL,
	[CreatedTime] [datetime] NULL,
 CONSTRAINT [PK_CheckList] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CheckListItem]    Script Date: 19/03/2018 09:08:16 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CheckListItem](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](255) NOT NULL,
	[IsChecked] [bit] NOT NULL,
	[CheckListID] [int] NOT NULL,
	[ChangedBy] [int] NULL,
	[CreatedBy] [int] NULL,
	[ChangedTime] [datetime] NULL,
	[CreatedTime] [datetime] NULL,
 CONSTRAINT [PK_CheckListItem] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Comment]    Script Date: 19/03/2018 09:08:17 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Comment](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Body] [text] NULL,
	[CreatedBy] [int] NOT NULL,
	[CreatedTime] [datetime] NOT NULL,
	[ChangedTime] [datetime] NULL,
	[TaskID] [int] NOT NULL,
	[ChangedBy] [datetime] NULL,
 CONSTRAINT [PK_Comment] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[List]    Script Date: 19/03/2018 09:08:19 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[List](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[ProjectID] [int] NOT NULL,
	[Name] [nvarchar](255) NOT NULL,
	[ChangedBy] [int] NULL,
	[CreatedBy] [int] NULL,
	[ChangedTime] [datetime] NULL,
	[CreatedTime] [datetime] NULL,
 CONSTRAINT [PK_Stage] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Notification]    Script Date: 19/03/2018 09:08:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Notification](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Type] [int] NOT NULL,
	[Content] [text] NOT NULL,
 CONSTRAINT [PK_Notification] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[NotificationUser]    Script Date: 19/03/2018 09:08:20 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[NotificationUser](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[UserID] [int] NOT NULL,
	[NotificationID] [int] NOT NULL,
	[IsRead] [bit] NOT NULL,
 CONSTRAINT [PK_NotificationUser] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Project]    Script Date: 19/03/2018 09:08:21 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Project](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](255) NOT NULL,
	[Description] [text] NULL,
	[Deadline] [date] NULL,
	[CreatedTime] [datetime] NOT NULL,
	[CreatedBy] [int] NOT NULL,
	[StartDate] [date] NULL,
	[ChangedBy] [int] NULL,
	[ChangedTime] [datetime] NULL,
	[LessionLearnt] [text] NULL,
	[CustomerFeedback] [text] NULL,
	[Status] [int] NULL,
 CONSTRAINT [PK_Project] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Task]    Script Date: 19/03/2018 09:08:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Task](
	[ID] [int] NOT NULL,
	[Name] [nvarchar](255) NOT NULL,
	[Description] [text] NULL,
	[CreatedBy] [int] NOT NULL,
	[CreatedTime] [datetime] NOT NULL,
	[ChangedBy] [int] NULL,
	[ChangedTime] [datetime] NULL,
	[Status] [int] NOT NULL,
	[Duration] [int] NOT NULL,
	[ListID] [int] NOT NULL,
	[Priority] [int] NULL,
	[StartDate] [datetime] NULL,
 CONSTRAINT [PK_Task] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TaskDependency]    Script Date: 19/03/2018 09:08:22 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TaskDependency](
	[SourceTaskID] [int] NOT NULL,
	[DestinationTaskID] [int] NOT NULL,
	[DependencyType] [int] NOT NULL,
	[ChangedBy] [int] NULL,
	[CreatedBy] [int] NULL,
	[ChangedTime] [datetime] NULL,
	[CreatedTime] [datetime] NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Team]    Script Date: 19/03/2018 09:08:23 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Team](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](255) NOT NULL,
	[CreatedBy] [int] NOT NULL,
	[CreatedDate] [date] NOT NULL,
	[IsClosed] [bit] NOT NULL,
 CONSTRAINT [PK_Team] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TeamProject]    Script Date: 19/03/2018 09:08:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TeamProject](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[TeamID] [int] NOT NULL,
	[ProjectID] [int] NOT NULL,
 CONSTRAINT [PK_TeamProject] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User]    Script Date: 19/03/2018 09:08:24 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[ID] [int] NOT NULL,
	[Name] [nvarchar](255) NULL,
	[Phone] [nvarchar](255) NULL,
	[Birthdate] [date] NULL,
	[Email] [varchar](255) NULL,
	[Username] [nvarchar](255) NOT NULL,
	[Password] [nvarchar](255) NOT NULL,
	[Avatar] [nvarchar](255) NULL,
	[IsAdmin] [bit] NOT NULL,
	[IsActive] [bit] NOT NULL,
	[IsManager] [bit] NOT NULL,
	[TeamID] [int] NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserProject]    Script Date: 19/03/2018 09:08:25 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserProject](
	[ID] [int] IDENTITY(45,1) NOT NULL,
	[UserID] [int] NOT NULL,
	[ProjectID] [int] NOT NULL,
 CONSTRAINT [PK_UserProject] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserTask]    Script Date: 19/03/2018 09:08:26 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserTask](
	[ID] [int] NOT NULL,
	[TaskID] [int] NOT NULL,
	[UserID] [int] NOT NULL,
	[IsFollow] [bit] NOT NULL,
	[IsAssigned] [bit] NOT NULL,
 CONSTRAINT [PK_UserTask] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserTeam]    Script Date: 19/03/2018 09:08:26 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserTeam](
	[ID] [int] IDENTITY(50,1) NOT NULL,
	[TeamID] [int] NOT NULL,
	[UserID] [int] NOT NULL,
 CONSTRAINT [UserTeam_ID_pk] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Comment] ON 

INSERT [dbo].[Comment] ([ID], [Body], [CreatedBy], [CreatedTime], [ChangedTime], [TaskID], [ChangedBy]) VALUES (4, N'13sadsad', 2, CAST(N'2018-03-16T15:57:58.147' AS DateTime), NULL, 2, NULL)
SET IDENTITY_INSERT [dbo].[Comment] OFF
SET IDENTITY_INSERT [dbo].[List] ON 

INSERT [dbo].[List] ([ID], [ProjectID], [Name], [ChangedBy], [CreatedBy], [ChangedTime], [CreatedTime]) VALUES (1, 1, N'Marketing plan for X Coffee shop - Phrase 1: Signs', NULL, NULL, NULL, NULL)
INSERT [dbo].[List] ([ID], [ProjectID], [Name], [ChangedBy], [CreatedBy], [ChangedTime], [CreatedTime]) VALUES (3, 1, N'Marketing plan for X Coffee shop - Phrase 2: Promotional Tools', NULL, NULL, NULL, NULL)
INSERT [dbo].[List] ([ID], [ProjectID], [Name], [ChangedBy], [CreatedBy], [ChangedTime], [CreatedTime]) VALUES (4, 1, N'Marketing plan for X Coffee shop - Phrase 3: Advertising', NULL, NULL, NULL, NULL)
INSERT [dbo].[List] ([ID], [ProjectID], [Name], [ChangedBy], [CreatedBy], [ChangedTime], [CreatedTime]) VALUES (5, 6, N'Finding clients for A company - Phrase 1', NULL, NULL, NULL, NULL)
INSERT [dbo].[List] ([ID], [ProjectID], [Name], [ChangedBy], [CreatedBy], [ChangedTime], [CreatedTime]) VALUES (6, 6, N'Finding clients for A company - Phrase 2', NULL, NULL, NULL, NULL)
INSERT [dbo].[List] ([ID], [ProjectID], [Name], [ChangedBy], [CreatedBy], [ChangedTime], [CreatedTime]) VALUES (7, 14, N'Promotional content for company X - Phrase 1', NULL, NULL, NULL, NULL)
INSERT [dbo].[List] ([ID], [ProjectID], [Name], [ChangedBy], [CreatedBy], [ChangedTime], [CreatedTime]) VALUES (8, 14, N'Promotional content for company X - Phrase 2', NULL, NULL, NULL, NULL)
INSERT [dbo].[List] ([ID], [ProjectID], [Name], [ChangedBy], [CreatedBy], [ChangedTime], [CreatedTime]) VALUES (10, 1002, N'Strategic business plan - Phrase 1: Business Vision and Mission', NULL, NULL, NULL, NULL)
INSERT [dbo].[List] ([ID], [ProjectID], [Name], [ChangedBy], [CreatedBy], [ChangedTime], [CreatedTime]) VALUES (11, 1002, N'Strategic business plan - Phrase 2: Compile the business strategies.', NULL, NULL, NULL, NULL)
INSERT [dbo].[List] ([ID], [ProjectID], [Name], [ChangedBy], [CreatedBy], [ChangedTime], [CreatedTime]) VALUES (12, 1002, N'Strategic business plan - Phrase 3: Prioritize the timeline.', NULL, NULL, NULL, NULL)
INSERT [dbo].[List] ([ID], [ProjectID], [Name], [ChangedBy], [CreatedBy], [ChangedTime], [CreatedTime]) VALUES (13, 1011, N'Making commercials for X coffee shop  - Phrase 1', NULL, NULL, NULL, NULL)
INSERT [dbo].[List] ([ID], [ProjectID], [Name], [ChangedBy], [CreatedBy], [ChangedTime], [CreatedTime]) VALUES (14, 1011, N'Making commercials for X coffee shop  - Phrase 2', NULL, NULL, NULL, NULL)
INSERT [dbo].[List] ([ID], [ProjectID], [Name], [ChangedBy], [CreatedBy], [ChangedTime], [CreatedTime]) VALUES (16, 1, N'Marketing plan for X Coffee shop - Phrase 4: Uniforms', NULL, NULL, NULL, NULL)
INSERT [dbo].[List] ([ID], [ProjectID], [Name], [ChangedBy], [CreatedBy], [ChangedTime], [CreatedTime]) VALUES (18, 6, N'ListTest', NULL, NULL, NULL, NULL)
INSERT [dbo].[List] ([ID], [ProjectID], [Name], [ChangedBy], [CreatedBy], [ChangedTime], [CreatedTime]) VALUES (19, 6, N'ListTest', NULL, NULL, NULL, NULL)
INSERT [dbo].[List] ([ID], [ProjectID], [Name], [ChangedBy], [CreatedBy], [ChangedTime], [CreatedTime]) VALUES (21, 1, N'ListTest8', NULL, NULL, NULL, NULL)
INSERT [dbo].[List] ([ID], [ProjectID], [Name], [ChangedBy], [CreatedBy], [ChangedTime], [CreatedTime]) VALUES (24, 1, N'ListTest', NULL, NULL, NULL, NULL)
SET IDENTITY_INSERT [dbo].[List] OFF
SET IDENTITY_INSERT [dbo].[Project] ON 

INSERT [dbo].[Project] ([ID], [Name], [Description], [Deadline], [CreatedTime], [CreatedBy], [StartDate], [ChangedBy], [ChangedTime], [LessionLearnt], [CustomerFeedback], [Status]) VALUES (1, N'Marketing plan for X Coffee shop', N'X Coffee Shops has just begun business, and marketing is essential to its success and future profitability.  The bar offers a place for people to meet in a comfortable, person-meeting environment.  The basic market need is place where singles can meet new similar people.  X Coffee Shops uses a sophisticated conversation system to enhance and facilitate singles meeting each other.

', NULL, CAST(N'2013-05-12T00:00:00.000' AS DateTime), 3, NULL, 16, CAST(N'2013-07-12T00:00:00.000' AS DateTime), NULL, NULL, 2)
INSERT [dbo].[Project] ([ID], [Name], [Description], [Deadline], [CreatedTime], [CreatedBy], [StartDate], [ChangedBy], [ChangedTime], [LessionLearnt], [CustomerFeedback], [Status]) VALUES (6, N'Finding clients for A company', N'.  Find design clients for graphic design company, find out about some small/medium businesses in the area, working for freelancing sites.

', NULL, CAST(N'2015-05-11T00:00:00.000' AS DateTime), 18, NULL, NULL, CAST(N'2015-08-11T00:00:00.000' AS DateTime), NULL, NULL, 2)
INSERT [dbo].[Project] ([ID], [Name], [Description], [Deadline], [CreatedTime], [CreatedBy], [StartDate], [ChangedBy], [ChangedTime], [LessionLearnt], [CustomerFeedback], [Status]) VALUES (11, N'Develop idea
 for Nha Nam', N'Develop idea
 for book selling brand, •	Develop for Book focus, book title, book subtitle, book topic.', NULL, CAST(N'2013-11-17T00:00:00.000' AS DateTime), 2, NULL, 12, CAST(N'2013-11-20T00:00:00.000' AS DateTime), NULL, NULL, NULL)
INSERT [dbo].[Project] ([ID], [Name], [Description], [Deadline], [CreatedTime], [CreatedBy], [StartDate], [ChangedBy], [ChangedTime], [LessionLearnt], [CustomerFeedback], [Status]) VALUES (14, N'Promotional content for company X', N'Writing content promotional content for company X', NULL, CAST(N'2014-12-10T00:00:00.000' AS DateTime), 13, NULL, 14, CAST(N'2015-01-10T00:00:00.000' AS DateTime), NULL, NULL, NULL)
INSERT [dbo].[Project] ([ID], [Name], [Description], [Deadline], [CreatedTime], [CreatedBy], [StartDate], [ChangedBy], [ChangedTime], [LessionLearnt], [CustomerFeedback], [Status]) VALUES (1002, N'Strategic business plan', N'Written document that pairs the objectives of a company with the needs of the market place. Although a strategic business plan contains similar elements of a traditional plan, a strategic plan takes planning a step further by not only defining company goals but utilizing those goals to take advantage of available business opportunities. This is achieved by carefully analyzing a particular business industry and being honest about your company''s strength and weakness in meeting the needs of the industry.', CAST(N'2017-06-21' AS Date), CAST(N'2014-07-12T00:00:00.000' AS DateTime), 7, CAST(N'2017-01-21' AS Date), 32, CAST(N'2014-08-12T00:00:00.000' AS DateTime), NULL, NULL, 2)
INSERT [dbo].[Project] ([ID], [Name], [Description], [Deadline], [CreatedTime], [CreatedBy], [StartDate], [ChangedBy], [ChangedTime], [LessionLearnt], [CustomerFeedback], [Status]) VALUES (1008, N'Marketing Strategy Planning', N'Process that the operational and managerial staff of a company goes through to create and implement effective marketing strategies. Strategic marketing planning takes several aspects of company marketing and promotion into consideration. The aspects that contribute to strategic marketing planning include identifying promotional opportunities and evaluating the marketing opportunities; researching, analyzing and identifying the target markets; developing a strategic position for the company to pursue and how to implement the strategy; preparation and implementation of the marketing plan; and measuring and evaluating the results of the marketing efforts of the company.', NULL, CAST(N'2015-08-17T00:00:00.000' AS DateTime), 34, NULL, 33, CAST(N'2016-08-17T00:00:00.000' AS DateTime), NULL, NULL, 2)
INSERT [dbo].[Project] ([ID], [Name], [Description], [Deadline], [CreatedTime], [CreatedBy], [StartDate], [ChangedBy], [ChangedTime], [LessionLearnt], [CustomerFeedback], [Status]) VALUES (1011, N'Making commercials for X coffee shop 1', NULL, NULL, CAST(N'2015-09-12T00:00:00.000' AS DateTime), 4, NULL, 25, CAST(N'2016-09-12T00:00:00.000' AS DateTime), NULL, NULL, 2)
INSERT [dbo].[Project] ([ID], [Name], [Description], [Deadline], [CreatedTime], [CreatedBy], [StartDate], [ChangedBy], [ChangedTime], [LessionLearnt], [CustomerFeedback], [Status]) VALUES (1012, N'adasda', N'asdasd', CAST(N'2018-03-23' AS Date), CAST(N'2018-03-07T22:38:53.360' AS DateTime), 1, CAST(N'2018-03-14' AS Date), NULL, NULL, NULL, NULL, 2)
INSERT [dbo].[Project] ([ID], [Name], [Description], [Deadline], [CreatedTime], [CreatedBy], [StartDate], [ChangedBy], [ChangedTime], [LessionLearnt], [CustomerFeedback], [Status]) VALUES (1013, N'Test', N'Test', CAST(N'2018-03-24' AS Date), CAST(N'2018-03-07T23:32:54.837' AS DateTime), 1, CAST(N'2018-03-21' AS Date), NULL, NULL, NULL, NULL, 2)
INSERT [dbo].[Project] ([ID], [Name], [Description], [Deadline], [CreatedTime], [CreatedBy], [StartDate], [ChangedBy], [ChangedTime], [LessionLearnt], [CustomerFeedback], [Status]) VALUES (1014, N'Tonight', N'As the moon highlight!', CAST(N'2018-03-23' AS Date), CAST(N'2018-03-07T23:48:52.540' AS DateTime), 1, CAST(N'2018-03-15' AS Date), NULL, NULL, NULL, NULL, 2)
INSERT [dbo].[Project] ([ID], [Name], [Description], [Deadline], [CreatedTime], [CreatedBy], [StartDate], [ChangedBy], [ChangedTime], [LessionLearnt], [CustomerFeedback], [Status]) VALUES (1015, N'Phong''s Test', N'Project Content', CAST(N'2018-03-23' AS Date), CAST(N'2018-03-08T07:28:53.033' AS DateTime), 1, CAST(N'2018-03-09' AS Date), NULL, NULL, NULL, NULL, 2)
INSERT [dbo].[Project] ([ID], [Name], [Description], [Deadline], [CreatedTime], [CreatedBy], [StartDate], [ChangedBy], [ChangedTime], [LessionLearnt], [CustomerFeedback], [Status]) VALUES (1016, N'Mccreee', N'It''s high noon!!!', CAST(N'2018-03-24' AS Date), CAST(N'2018-03-08T08:24:10.890' AS DateTime), 1, CAST(N'2018-03-09' AS Date), NULL, NULL, NULL, NULL, 2)
INSERT [dbo].[Project] ([ID], [Name], [Description], [Deadline], [CreatedTime], [CreatedBy], [StartDate], [ChangedBy], [ChangedTime], [LessionLearnt], [CustomerFeedback], [Status]) VALUES (1017, N'Mccree', N'It''s high noon!!', CAST(N'2018-03-23' AS Date), CAST(N'2018-03-08T08:38:46.977' AS DateTime), 1, CAST(N'2018-03-08' AS Date), NULL, NULL, NULL, NULL, 2)
INSERT [dbo].[Project] ([ID], [Name], [Description], [Deadline], [CreatedTime], [CreatedBy], [StartDate], [ChangedBy], [ChangedTime], [LessionLearnt], [CustomerFeedback], [Status]) VALUES (1018, N'Testing', N'This is test project', CAST(N'2018-03-10' AS Date), CAST(N'2018-03-08T09:19:09.280' AS DateTime), 1, CAST(N'2018-03-07' AS Date), NULL, NULL, NULL, NULL, 2)
INSERT [dbo].[Project] ([ID], [Name], [Description], [Deadline], [CreatedTime], [CreatedBy], [StartDate], [ChangedBy], [ChangedTime], [LessionLearnt], [CustomerFeedback], [Status]) VALUES (1019, N'Test', N'Test', CAST(N'2018-03-16' AS Date), CAST(N'2018-03-08T09:48:00.860' AS DateTime), 1, CAST(N'2018-03-07' AS Date), NULL, NULL, NULL, NULL, 2)
INSERT [dbo].[Project] ([ID], [Name], [Description], [Deadline], [CreatedTime], [CreatedBy], [StartDate], [ChangedBy], [ChangedTime], [LessionLearnt], [CustomerFeedback], [Status]) VALUES (1020, N'Test', N'Test', CAST(N'2018-03-16' AS Date), CAST(N'2018-03-08T09:50:57.730' AS DateTime), 1, CAST(N'2018-03-08' AS Date), NULL, NULL, NULL, NULL, 2)
INSERT [dbo].[Project] ([ID], [Name], [Description], [Deadline], [CreatedTime], [CreatedBy], [StartDate], [ChangedBy], [ChangedTime], [LessionLearnt], [CustomerFeedback], [Status]) VALUES (1021, N'Test', N'Test', CAST(N'2018-03-23' AS Date), CAST(N'2018-03-08T09:55:36.670' AS DateTime), 1, CAST(N'2018-03-07' AS Date), NULL, NULL, NULL, NULL, 2)
INSERT [dbo].[Project] ([ID], [Name], [Description], [Deadline], [CreatedTime], [CreatedBy], [StartDate], [ChangedBy], [ChangedTime], [LessionLearnt], [CustomerFeedback], [Status]) VALUES (1022, N'IBM', N'For other uses of IBM, see IBM (disambiguation). "Big Blue" redirects here. It is not to be confused with New York Giants. For other uses of Big Blue, see Big Blue (disambiguation).
International Business Machines Corporation
IBM logo.svg
Logo as of 1972
IBM Watson.PNG
IBM Watson system in 2011
Type
	Public
Traded as 	

    NYSE: IBM
    DJIA Component
    S&P 100 Component
    S&P 500 Component

ISIN 	US4592001014
Industry 	

    Cloud computing Cognitive computing 

Founded 	June 16, 1911; 106 years ago (as Computing-Tabulating-Recording Company)
Endicott, New York, U.S.[1]
Founder 	Charles Ranlett Flint
Headquarters 	Armonk, New York, U.S.
Area served
	177 countries[2]
Key people
	Ginni Rometty
(Chairwoman, President and CEO)
Products 	See IBM products
Revenue 	Decrease US$ 79.139 billion (2017)[3]
Operating income
	Decrease US$ 11.400 billion (2017)[3]
Net income
	Decrease US$ 5.753 billion (2017)[3]
Total assets 	Increase US$ 125.35 billion (2017)[3]
Total equity 	Decrease US$ 17.594 billion (2017)[3]
Number of employees
	380,300 (2017)[4]
Website 	www.ibm.com
Thomas J Watson Sr.jpg 	
"THINK"
Menu
0:00
Thomas J. Watson, who led IBM from 1914 to 1956, discussing the company''s motto "THINK"
Problems playing this file? See media help.

IBM (International Business Machines Corporation) is an American multinational technology company headquartered in Armonk, New York, United States, with operations in over 170 countries. The company originated in 1911 as the Computing-Tabulating-Recording Company (CTR) and was renamed "International Business Machines" in 1924.

IBM manufactures and markets computer hardware, middleware and software, and provides hosting and consulting services in areas ranging from mainframe computers to nanotechnology. IBM is also a major research organization, holding the record for most patents generated by a business (as of 2018) for 25 consecutive years.[5] Inventions by IBM include the automated teller machine (ATM), the PC, the floppy disk, the hard disk drive, the magnetic stripe card, the relational database, the SQL programming language, the UPC barcode, and dynamic random-access memory (DRAM). The IBM mainframe, exemplified by the System/360, was the dominant computing platform during the 1960s and 1970s.', CAST(N'2018-03-14' AS Date), CAST(N'2018-03-08T10:08:32.983' AS DateTime), 1, CAST(N'2018-03-01' AS Date), NULL, NULL, NULL, NULL, 2)
INSERT [dbo].[Project] ([ID], [Name], [Description], [Deadline], [CreatedTime], [CreatedBy], [StartDate], [ChangedBy], [ChangedTime], [LessionLearnt], [CustomerFeedback], [Status]) VALUES (1023, N'IBM', N'For other uses of IBM, see IBM (disambiguation). "Big Blue" redirects here. It is not to be confused with New York Giants. For other uses of Big Blue, see Big Blue (disambiguation).
International Business Machines Corporation
IBM logo.svg
Logo as of 1972
IBM Watson.PNG
IBM Watson system in 2011
Type
	Public
Traded as 	

    NYSE: IBM
    DJIA Component
    S&P 100 Component
    S&P 500 Component

ISIN 	US4592001014
Industry 	

    Cloud computing Cognitive computing 

Founded 	June 16, 1911; 106 years ago (as Computing-Tabulating-Recording Company)
Endicott, New York, U.S.[1]
Founder 	Charles Ranlett Flint
Headquarters 	Armonk, New York, U.S.
Area served
	177 countries[2]
Key people
	Ginni Rometty
(Chairwoman, President and CEO)
Products 	See IBM products
Revenue 	Decrease US$ 79.139 billion (2017)[3]
Operating income
	Decrease US$ 11.400 billion (2017)[3]
Net income
	Decrease US$ 5.753 billion (2017)[3]
Total assets 	Increase US$ 125.35 billion (2017)[3]
Total equity 	Decrease US$ 17.594 billion (2017)[3]
Number of employees
	380,300 (2017)[4]
Website 	www.ibm.com
Thomas J Watson Sr.jpg 	
"THINK"
Menu
0:00
Thomas J. Watson, who led IBM from 1914 to 1956, discussing the company''s motto "THINK"
Problems playing this file? See media help.

IBM (International Business Machines Corporation) is an American multinational technology company headquartered in Armonk, New York, United States, with operations in over 170 countries. The company originated in 1911 as the Computing-Tabulating-Recording Company (CTR) and was renamed "International Business Machines" in 1924.

IBM manufactures and markets computer hardware, middleware and software, and provides hosting and consulting services in areas ranging from mainframe computers to nanotechnology. IBM is also a major research organization, holding the record for most patents generated by a business (as of 2018) for 25 consecutive years.[5] Inventions by IBM include the automated teller machine (ATM), the PC, the floppy disk, the hard disk drive, the magnetic stripe card, the relational database, the SQL programming language, the UPC barcode, and dynamic random-access memory (DRAM). The IBM mainframe, exemplified by the System/360, was the dominant computing platform during the 1960s and 1970s.', CAST(N'2018-03-25' AS Date), CAST(N'2018-03-08T10:09:49.337' AS DateTime), 1, CAST(N'2018-03-08' AS Date), NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Project] ([ID], [Name], [Description], [Deadline], [CreatedTime], [CreatedBy], [StartDate], [ChangedBy], [ChangedTime], [LessionLearnt], [CustomerFeedback], [Status]) VALUES (1024, N'Microsoft', N'Microsoft Corporation (/''ma?kr??s?ft/,[2][3] abbreviated as MS) is an American multinational technology company with headquarters in Redmond, Washington. It develops, manufactures, licenses, supports and sells computer software, consumer electronics, personal computers, and services. Its best known software products are the Microsoft Windows line of operating systems, the Microsoft Office suite, and the Internet Explorer and Edge web browsers. Its flagship hardware products are the Xbox video game consoles and the Microsoft Surface tablet lineup. As of 2016, it is the world''s largest software maker by revenue,[4] and one of the world''s most valuable companies.[5] The word "Microsoft" is a portmanteau of "microcomputer" and "software".[6]

Microsoft was founded by Paul Allen and Bill Gates on April 4, 1975, to develop and sell BASIC interpreters for the Altair 8800. It rose to dominate the personal computer operating system market with MS-DOS in the mid-1980s, followed by Microsoft Windows. The company''s 1986 initial public offering (IPO), and subsequent rise in its share price, created three billionaires and an estimated 12,000 millionaires among Microsoft employees. Since the 1990s, it has increasingly diversified from the operating system market and has made a number of corporate acquisitions—their largest being the acquisition of LinkedIn for $26.2 billion in December 2016,[7] followed by Skype Technologies for $8.5 billion in May 2011.[8]

As of 2015, Microsoft is market-dominant in the IBM PC-compatible operating system market and the office software suite market, although it has lost the majority of the overall operating system market to Android.[9] The company also produces a wide range of other consumer and enterprise software for desktops and servers, including Internet search (with Bing), the digital services market (through MSN), mixed reality (HoloLens), cloud computing (Azure) and software development (Visual Studio).', CAST(N'2018-03-13' AS Date), CAST(N'2018-03-08T10:10:20.707' AS DateTime), 1, CAST(N'2018-03-04' AS Date), NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Project] ([ID], [Name], [Description], [Deadline], [CreatedTime], [CreatedBy], [StartDate], [ChangedBy], [ChangedTime], [LessionLearnt], [CustomerFeedback], [Status]) VALUES (1025, N'NCsoft', N'NCSOFT was founded in March 1997 by T.J. Kim. In September 1998, NCSOFT launched its first game Lineage. In April 2001 the company created a US subsidiary under the name NC Interactive (based in Austin, Texas, and would later become NCSOFT West) after acquiring Destination Games, headed by Richard Garriott and Robert Garriott.[citation needed] In 2004, NCSOFT launched two MMORPGs, Lineage II and City of Heroes.[3]

The company formed NCSOFT Europe in July 2004 as a wholly owned subsidiary with its main office in Brighton, England. They brought City of Heroes to several European countries on February 4, 2005, and have since established European service for WildStar and Blade & Soul as well.[citation needed]

On April 26, 2005, NCSoft published Arenanet''s first MMO Guild Wars Prophecies as well as Arenanets follow up campaigns Factions and Nightfall and the expansion Eye of the North. NCSoft also published Guild Wars 2 but stopped being the publisher for Guild Wars 2 in 2015 with the release of Heart of Thorns.

On September 10, 2008, NCSOFT announced the formation of NCSOFT West, a subsidiary which manages NCSOFT''s other western organizations, and established its headquarters for that subsidiary in Seattle, Washington.[4]

On July 8, 2011, NCSOFT started talks with SK Telecom to acquire Ntreev Soft Co., Ltd.[5] The talks were expected to last less than a month, but it took seven for NCSOFT to complete the acquisition; purchasing 76% of Ntreev''s stock for ?108 billion (US$96.7 million) on February 15, 2012.[6]

In 2011, NCSOFT purchased Hotdog Studio, a mobile game studio based in Seoul that produces phone and smartphone titles such as Dark Shrine.[7]

In June, 2012, NCSOFT launched Blade & Soul, their first MMORPG since Aion launched in 2006.

In 2012 Nexon acquired a 14.7 percent interest in NCSOFT for $688 million.[8] Nexon sold all of its shares of NCSOFT in October 2015.

On November 19, 2015, NCSOFT West announced the formation of Iron Tiger studios, a developer based out of San Mateo, California focused on adapting Korean-made mobile titles for the West, as well as developing their own mobile games.[9]', CAST(N'2018-03-28' AS Date), CAST(N'2018-03-08T10:10:52.940' AS DateTime), 1, CAST(N'2018-03-01' AS Date), NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Project] ([ID], [Name], [Description], [Deadline], [CreatedTime], [CreatedBy], [StartDate], [ChangedBy], [ChangedTime], [LessionLearnt], [CustomerFeedback], [Status]) VALUES (1026, N'testuser', N'123', CAST(N'2016-08-12' AS Date), CAST(N'2018-03-11T06:45:46.007' AS DateTime), 1, CAST(N'2012-08-12' AS Date), NULL, NULL, NULL, NULL, 2)
INSERT [dbo].[Project] ([ID], [Name], [Description], [Deadline], [CreatedTime], [CreatedBy], [StartDate], [ChangedBy], [ChangedTime], [LessionLearnt], [CustomerFeedback], [Status]) VALUES (1027, N'FPT Software', N'FPT Software is a global software outsourcing and technology company based in Vietnam. It is part of FPT Corporation, a multinational information technology company of Vietnam.

FPT Software provides services in Analytics, IoT, Mobility, Cloud, Embedded System, Q&A testing, Legacy Migration, Package Implementation, Application Service, and BPO services globally from delivery centers in the United States, Japan, Europe, Australia, Vietnam and the Asia Pacific.', CAST(N'2018-03-23' AS Date), CAST(N'2018-03-12T09:52:22.923' AS DateTime), 1, CAST(N'2018-03-08' AS Date), NULL, NULL, NULL, NULL, 2)
INSERT [dbo].[Project] ([ID], [Name], [Description], [Deadline], [CreatedTime], [CreatedBy], [StartDate], [ChangedBy], [ChangedTime], [LessionLearnt], [CustomerFeedback], [Status]) VALUES (1028, N'FPT Software', N'FPT Software is a global software outsourcing and technology company based in Vietnam. It is part of FPT Corporation, a multinational information technology company of Vietnam.

FPT Software provides services in Analytics, IoT, Mobility, Cloud, Embedded System, Q&A testing, Legacy Migration, Package Implementation, Application Service, and BPO services globally from delivery centers in the United States, Japan, Europe, Australia, Vietnam and the Asia Pacific.', CAST(N'2018-03-24' AS Date), CAST(N'2018-03-12T09:53:58.520' AS DateTime), 1, CAST(N'2018-03-15' AS Date), NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Project] ([ID], [Name], [Description], [Deadline], [CreatedTime], [CreatedBy], [StartDate], [ChangedBy], [ChangedTime], [LessionLearnt], [CustomerFeedback], [Status]) VALUES (1029, N'Global CyberSoft Solutions', N'Asia Digital Society Forum organized its first event in 2014 and this conference series is hosted by Hitachi and its partners in South-east Asia. With a mission to build a better world, the forum is to contribute to the development of digital society in developing countries, sharing the know-how of solving social problems and practical implementation experiences. Asia Digital Society Forum 2018 has been recently held in Hanoi with the discussion on the social model 5.0, smart city-related technologies, and smart factories.', CAST(N'2018-03-16' AS Date), CAST(N'2018-03-12T09:54:46.233' AS DateTime), 1, CAST(N'2018-03-09' AS Date), NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Project] ([ID], [Name], [Description], [Deadline], [CreatedTime], [CreatedBy], [StartDate], [ChangedBy], [ChangedTime], [LessionLearnt], [CustomerFeedback], [Status]) VALUES (1031, N'Test', N'Test', CAST(N'2018-04-25' AS Date), CAST(N'2018-03-25T09:05:46.223' AS DateTime), 1, CAST(N'2018-03-25' AS Date), NULL, NULL, NULL, NULL, 2)
INSERT [dbo].[Project] ([ID], [Name], [Description], [Deadline], [CreatedTime], [CreatedBy], [StartDate], [ChangedBy], [ChangedTime], [LessionLearnt], [CustomerFeedback], [Status]) VALUES (1036, N'testuser', N'123', CAST(N'2013-08-12' AS Date), CAST(N'2018-03-15T14:54:36.777' AS DateTime), 1, CAST(N'2012-08-12' AS Date), NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Project] ([ID], [Name], [Description], [Deadline], [CreatedTime], [CreatedBy], [StartDate], [ChangedBy], [ChangedTime], [LessionLearnt], [CustomerFeedback], [Status]) VALUES (1037, N'testuser', N'123', CAST(N'2013-08-12' AS Date), CAST(N'2018-03-15T14:57:45.007' AS DateTime), 1, CAST(N'2012-08-12' AS Date), NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Project] ([ID], [Name], [Description], [Deadline], [CreatedTime], [CreatedBy], [StartDate], [ChangedBy], [ChangedTime], [LessionLearnt], [CustomerFeedback], [Status]) VALUES (1038, N'testuser', N'123', CAST(N'2013-08-12' AS Date), CAST(N'2018-03-15T15:01:33.150' AS DateTime), 1, CAST(N'2021-08-12' AS Date), NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Project] ([ID], [Name], [Description], [Deadline], [CreatedTime], [CreatedBy], [StartDate], [ChangedBy], [ChangedTime], [LessionLearnt], [CustomerFeedback], [Status]) VALUES (1039, N'testuser', N'123', CAST(N'2011-08-12' AS Date), CAST(N'2018-03-15T15:05:31.153' AS DateTime), 1, CAST(N'2013-08-12' AS Date), NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Project] ([ID], [Name], [Description], [Deadline], [CreatedTime], [CreatedBy], [StartDate], [ChangedBy], [ChangedTime], [LessionLearnt], [CustomerFeedback], [Status]) VALUES (1040, N'testuser', N'123', CAST(N'2011-08-12' AS Date), CAST(N'2018-03-15T15:06:37.290' AS DateTime), 1, CAST(N'2013-08-12' AS Date), NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Project] ([ID], [Name], [Description], [Deadline], [CreatedTime], [CreatedBy], [StartDate], [ChangedBy], [ChangedTime], [LessionLearnt], [CustomerFeedback], [Status]) VALUES (1041, N'testuser', N'123', CAST(N'2017-08-12' AS Date), CAST(N'2018-03-15T15:06:54.937' AS DateTime), 1, CAST(N'2013-08-12' AS Date), NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Project] ([ID], [Name], [Description], [Deadline], [CreatedTime], [CreatedBy], [StartDate], [ChangedBy], [ChangedTime], [LessionLearnt], [CustomerFeedback], [Status]) VALUES (1042, N'Making commercials for X coffee shop 12', N'Collaborate with writers, web content managers, print production manager, and graphic designers to produce marketing and recruitment materials. Edit and produce videos for web content, presentations, advertising, education, media relations and other purposes.', NULL, CAST(N'2018-03-15T15:08:00.403' AS DateTime), 1, CAST(N'2016-08-12' AS Date), NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Project] ([ID], [Name], [Description], [Deadline], [CreatedTime], [CreatedBy], [StartDate], [ChangedBy], [ChangedTime], [LessionLearnt], [CustomerFeedback], [Status]) VALUES (1043, N'testuser1', N'123', CAST(N'2011-08-12' AS Date), CAST(N'2018-03-15T15:17:09.637' AS DateTime), 1, CAST(N'2010-08-12' AS Date), NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Project] ([ID], [Name], [Description], [Deadline], [CreatedTime], [CreatedBy], [StartDate], [ChangedBy], [ChangedTime], [LessionLearnt], [CustomerFeedback], [Status]) VALUES (1044, N'testuser12', N'123', CAST(N'2011-08-12' AS Date), CAST(N'2018-03-15T15:23:41.850' AS DateTime), 1, CAST(N'2010-08-12' AS Date), NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Project] ([ID], [Name], [Description], [Deadline], [CreatedTime], [CreatedBy], [StartDate], [ChangedBy], [ChangedTime], [LessionLearnt], [CustomerFeedback], [Status]) VALUES (1045, N'testuser123', N'123', CAST(N'2011-08-12' AS Date), CAST(N'2018-03-15T15:24:11.720' AS DateTime), 1, CAST(N'2013-08-12' AS Date), NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Project] ([ID], [Name], [Description], [Deadline], [CreatedTime], [CreatedBy], [StartDate], [ChangedBy], [ChangedTime], [LessionLearnt], [CustomerFeedback], [Status]) VALUES (1046, N'testuser1234', N'123', CAST(N'1992-04-22' AS Date), CAST(N'2018-03-15T15:42:54.630' AS DateTime), 1, CAST(N'1992-04-22' AS Date), NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Project] ([ID], [Name], [Description], [Deadline], [CreatedTime], [CreatedBy], [StartDate], [ChangedBy], [ChangedTime], [LessionLearnt], [CustomerFeedback], [Status]) VALUES (1047, N'testuser12345', N'123', NULL, CAST(N'2018-03-16T13:26:47.163' AS DateTime), 1, NULL, NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Project] ([ID], [Name], [Description], [Deadline], [CreatedTime], [CreatedBy], [StartDate], [ChangedBy], [ChangedTime], [LessionLearnt], [CustomerFeedback], [Status]) VALUES (1048, N'testuser12348', N'123', NULL, CAST(N'2018-03-16T13:31:47.597' AS DateTime), 1, CAST(N'2006-12-01' AS Date), NULL, NULL, NULL, NULL, NULL)
INSERT [dbo].[Project] ([ID], [Name], [Description], [Deadline], [CreatedTime], [CreatedBy], [StartDate], [ChangedBy], [ChangedTime], [LessionLearnt], [CustomerFeedback], [Status]) VALUES (1049, N'testuser1234836', N'123', NULL, CAST(N'2018-03-16T13:47:06.760' AS DateTime), 1, NULL, NULL, NULL, NULL, NULL, NULL)
SET IDENTITY_INSERT [dbo].[Project] OFF
INSERT [dbo].[Task] ([ID], [Name], [Description], [CreatedBy], [CreatedTime], [ChangedBy], [ChangedTime], [Status], [Duration], [ListID], [Priority], [StartDate]) VALUES (2, N'Place a portable A-frame', N'Place a portable A-frame sign in front of your coffee shop every morning to remind people you are there.', 3, CAST(N'2013-05-12T00:00:00.000' AS DateTime), NULL, NULL, 1, 1, 1, 1, CAST(N'2013-05-13T00:00:00.000' AS DateTime))
INSERT [dbo].[Task] ([ID], [Name], [Description], [CreatedBy], [CreatedTime], [ChangedBy], [ChangedTime], [Status], [Duration], [ListID], [Priority], [StartDate]) VALUES (5, N'Adding balloons', N'Adding balloons and crepe paper streamers will continue to get the attention of those driving and walking by.', 3, CAST(N'2013-05-12T00:00:00.000' AS DateTime), NULL, NULL, 1, 3, 1, 1, CAST(N'2013-05-13T00:00:00.000' AS DateTime))
INSERT [dbo].[Task] ([ID], [Name], [Description], [CreatedBy], [CreatedTime], [ChangedBy], [ChangedTime], [Status], [Duration], [ListID], [Priority], [StartDate]) VALUES (8, N'Promotional Tools', N'Use promotional tools. Promotional tools work to bring customers in with the promise of a reward. ', 16, CAST(N'2013-05-14T00:00:00.000' AS DateTime), NULL, NULL, 1, 5, 3, 1, CAST(N'2013-05-14T00:00:00.000' AS DateTime))
INSERT [dbo].[Task] ([ID], [Name], [Description], [CreatedBy], [CreatedTime], [ChangedBy], [ChangedTime], [Status], [Duration], [ListID], [Priority], [StartDate]) VALUES (10, N'Strategically timed advertisements', N'Place strategically timed advertisements in newspapers, on radio stations and on television spots. ', 16, CAST(N'2013-08-14T00:00:00.000' AS DateTime), NULL, NULL, 1, 4, 4, 1, CAST(N'2013-08-14T00:00:00.000' AS DateTime))
INSERT [dbo].[Task] ([ID], [Name], [Description], [CreatedBy], [CreatedTime], [ChangedBy], [ChangedTime], [Status], [Duration], [ListID], [Priority], [StartDate]) VALUES (16, N'Free Wi-Fi in coffee shop', N'Use the ads to promote a special coffee blend or the fact that you offer free Wi-Fi in your coffee shop. Each ad or announcement will state that mention of the ad gets a ten percent discount on the purchase. ', 3, CAST(N'2013-08-14T00:00:00.000' AS DateTime), 16, CAST(N'2013-08-17T00:00:00.000' AS DateTime), 1, 5, 4, 1, CAST(N'2013-08-17T00:00:00.000' AS DateTime))
INSERT [dbo].[Task] ([ID], [Name], [Description], [CreatedBy], [CreatedTime], [ChangedBy], [ChangedTime], [Status], [Duration], [ListID], [Priority], [StartDate]) VALUES (17, N'Employees wear shirts', N'Have employees wear shirts branded with the company logo. The shirts should be provided to employees free of charge to wear during their shifts.', 3, CAST(N'2013-05-19T00:00:00.000' AS DateTime), NULL, NULL, 2, 3, 16, 1, CAST(N'2013-05-19T00:00:00.000' AS DateTime))
INSERT [dbo].[Task] ([ID], [Name], [Description], [CreatedBy], [CreatedTime], [ChangedBy], [ChangedTime], [Status], [Duration], [ListID], [Priority], [StartDate]) VALUES (26, N'Sale Shirts.', N'Similar shirts will be for sale within the coffee shop.', 3, CAST(N'2013-05-19T00:00:00.000' AS DateTime), NULL, NULL, 1, 2, 16, 1, NULL)
INSERT [dbo].[Task] ([ID], [Name], [Description], [CreatedBy], [CreatedTime], [ChangedBy], [ChangedTime], [Status], [Duration], [ListID], [Priority], [StartDate]) VALUES (27, N'Write down the business vision', N'This is a statement that includes the purpose, goals and values of the business. It’s typically a one- to two-sentence statement.', 7, CAST(N'2014-01-12T00:00:00.000' AS DateTime), 32, CAST(N'2014-02-12T00:00:00.000' AS DateTime), 1, 6, 10, 0, CAST(N'2014-01-12T00:00:00.000' AS DateTime))
INSERT [dbo].[Task] ([ID], [Name], [Description], [CreatedBy], [CreatedTime], [ChangedBy], [ChangedTime], [Status], [Duration], [ListID], [Priority], [StartDate]) VALUES (31, N'Write the mission statement for the business', N'This is a brief, two- to three-sentence description of the business, including what type of business it is and how you plan to meet the needs of your target market by offering the products or services of your business.', 7, CAST(N'2014-01-12T00:00:00.000' AS DateTime), NULL, NULL, 0, 1, 10, 1, CAST(N'2014-01-12T00:00:00.000' AS DateTime))
INSERT [dbo].[Task] ([ID], [Name], [Description], [CreatedBy], [CreatedTime], [ChangedBy], [ChangedTime], [Status], [Duration], [ListID], [Priority], [StartDate]) VALUES (32, N'Compile the business strategies.', N'The strategies of the business are which actions need to be taken and who in the business is responsible for completing the action. Strategies typically include marketing and advertising actions as well. ', 7, CAST(N'2014-02-12T00:00:00.000' AS DateTime), NULL, NULL, 1, 6, 11, 1, NULL)
INSERT [dbo].[Task] ([ID], [Name], [Description], [CreatedBy], [CreatedTime], [ChangedBy], [ChangedTime], [Status], [Duration], [ListID], [Priority], [StartDate]) VALUES (36, N'One-year period business plan', N'A business plan typically covers a one-year period. Since you cannot implement everything at once, you have to prioritize your list of actions.', 31, CAST(N'2014-02-19T00:00:00.000' AS DateTime), 7, CAST(N'2014-02-20T00:00:00.000' AS DateTime), 1, 4, 12, 1, CAST(N'2014-02-21T00:00:00.000' AS DateTime))
INSERT [dbo].[Task] ([ID], [Name], [Description], [CreatedBy], [CreatedTime], [ChangedBy], [ChangedTime], [Status], [Duration], [ListID], [Priority], [StartDate]) VALUES (39, N'Completed some Tasks on the list before others can be accomplished.', N'This needs to be done before the marketing manager can complete the tasks necessary to drive targeted traffic to the site to increase the number of subscribers on the company''s e-mail list.', 7, CAST(N'2014-02-20T00:00:00.000' AS DateTime), NULL, NULL, 1, 8, 12, 2, NULL)
INSERT [dbo].[Task] ([ID], [Name], [Description], [CreatedBy], [CreatedTime], [ChangedBy], [ChangedTime], [Status], [Duration], [ListID], [Priority], [StartDate]) VALUES (40, N'testtask1', N'yolo1', 1, CAST(N'2018-03-11T06:56:43.467' AS DateTime), NULL, NULL, 0, 0, 14, 0, CAST(N'2016-08-12T00:00:00.000' AS DateTime))
INSERT [dbo].[Task] ([ID], [Name], [Description], [CreatedBy], [CreatedTime], [ChangedBy], [ChangedTime], [Status], [Duration], [ListID], [Priority], [StartDate]) VALUES (41, N'testtask1', N'yolo1', 1, CAST(N'2018-03-11T08:24:14.837' AS DateTime), NULL, NULL, 0, 0, 14, 1, CAST(N'2012-08-12T00:00:00.000' AS DateTime))
SET IDENTITY_INSERT [dbo].[Team] ON 

INSERT [dbo].[Team] ([ID], [Name], [CreatedBy], [CreatedDate], [IsClosed]) VALUES (6, N'Creative department', 2, CAST(N'2013-11-11' AS Date), 0)
INSERT [dbo].[Team] ([ID], [Name], [CreatedBy], [CreatedDate], [IsClosed]) VALUES (10, N'Account Management department', 3, CAST(N'2013-04-11' AS Date), 0)
INSERT [dbo].[Team] ([ID], [Name], [CreatedBy], [CreatedDate], [IsClosed]) VALUES (11, N'Production department', 4, CAST(N'2013-07-12' AS Date), 0)
INSERT [dbo].[Team] ([ID], [Name], [CreatedBy], [CreatedDate], [IsClosed]) VALUES (14, N'Account Planning department', 7, CAST(N'2013-08-30' AS Date), 0)
SET IDENTITY_INSERT [dbo].[Team] OFF
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (0, N'top', N'01278588522', CAST(N'1985-12-01' AS Date), N'Phat@gmail.com', N'top gd', N'12345', NULL, 0, 1, 0, 6)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (1, N'Tran Loi Phong', N'01278588338', CAST(N'1995-11-12' AS Date), N'Phong@gmail.com', N'phong', N'123', N'avatar_1.jpg', 1, 1, 0, 6)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (2, N'Dien Doan', N'01628423658', CAST(N'1995-12-22' AS Date), N'Dien@gmail.com', N'Dien Doan', N'1234', N'25994855_974611699354326_8726051274387094426_n.jpg', 1, 1, 1, 6)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (3, N'Bui Tat Phat', N'01687412565', CAST(N'1995-10-26' AS Date), N'Phat@gmail.com', N'Phat Bui', N'12345', N'user_phat.png', 0, 1, 1, 10)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (4, N'Phạm Thanh Tùng', N'01627158423', CAST(N'1994-06-01' AS Date), N'Tung@gmail.com', N'tungpt', N'123456', N'26910289_1302577266544804_2727893603664003986_o.jpg', 1, 1, 0, 10)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (7, N'Trinh Dinh Lam', N'01578246658', CAST(N'1995-03-15' AS Date), N'Lam@gmail.com', N'Lam', N'357A', N'27867360_1708511502521042_7024456728235995189_n.jpg', 0, 1, 0, 10)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (9, N'Clark Vo', NULL, NULL, NULL, N'Clark Vo', N'298B', NULL, 0, 0, 0, 10)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (10, N'Hanna Truong', NULL, NULL, NULL, N'Hanna Truong', N'257F', NULL, 0, 1, 0, 10)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (11, N'Hanna Huong', NULL, NULL, NULL, N'Hanna Huong', N'245D', NULL, 0, 1, 0, 10)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (12, N'Kai Nguyen', NULL, NULL, NULL, N'Kai Nguyen', N'248R', NULL, 0, 1, 0, 10)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (13, N'Robben Tran', NULL, NULL, NULL, N'Robben Tran', N'785R', NULL, 0, 1, 0, 10)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (14, N'Kaithy Nguyen', NULL, NULL, NULL, N'Kaithy Nguyen', N'784T', NULL, 0, 1, 0, 10)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (15, N'Jun Pham', NULL, NULL, NULL, N'Jun Pham', N'785E', NULL, 0, 1, 0, 6)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (16, N'Be Tran', NULL, NULL, NULL, N'Be Tran', N'528R', NULL, 0, 0, 0, NULL)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (17, N'Erik Lu ', NULL, NULL, NULL, N'Erik Lu ', N'784W', NULL, 0, 1, 0, 6)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (18, N'Harry Lu', NULL, NULL, NULL, N'Harry Lu', N'784B', NULL, 0, 1, 0, 14)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (19, N'Hary Won', NULL, NULL, NULL, N'Hary Won', N'418G', NULL, 0, 1, 0, NULL)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (20, N'Marcus Truong', NULL, NULL, NULL, N'Marcus Truong', N'784F', NULL, 0, 1, 0, 6)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (21, N'Khanh Truong', NULL, NULL, NULL, N'Khanh Truong', N'741T', NULL, 0, 1, 0, 6)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (22, N'Kyle Hoang', NULL, NULL, NULL, N'Kyle Hoang', N'783Q', NULL, 0, 1, 0, 6)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (23, N'Luke Nguyen', NULL, NULL, NULL, N'Luke Nguyen', N'784Z', NULL, 0, 1, 0, 6)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (24, N'Blank Tran', NULL, NULL, NULL, N'Blank Tran', N'174U', NULL, 0, 1, 0, 11)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (25, N'Franklin Pham', NULL, NULL, NULL, N'Franklin Pham', N'819F', NULL, 0, 0, 0, NULL)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (26, N'User Name', N'1278588522', CAST(N'2018-11-30' AS Date), NULL, N'Frank Hoang', N'784H', NULL, 0, 1, 0, 11)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (27, N'Johnathan Nha Vo', NULL, NULL, NULL, N'Johnathan Nha Vo', N'370F', NULL, 0, 1, 1, 11)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (28, N'Cani Pham', NULL, NULL, NULL, N'Cani Pham', N'247E', NULL, 0, 1, 0, 11)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (29, N'Patrick Vu', NULL, NULL, NULL, N'Patrick Vu', N'147W', NULL, 0, 1, 0, 11)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (31, N'Kate Vo', NULL, NULL, NULL, N'Kate Vo', N'140E', NULL, 0, 1, 0, 11)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (32, N'Robert kim', NULL, NULL, NULL, N'Robert kim', N'128I', NULL, 0, 1, 1, 14)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (33, NULL, NULL, NULL, NULL, N'Haye Yo', N'149K', NULL, 0, 1, 0, 14)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (34, NULL, NULL, NULL, NULL, N'Carlos Nguyen', N'784J', NULL, 0, 1, 0, 14)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (35, N'Carlos Mai', NULL, NULL, NULL, N'Carlos Mai', N'854T', NULL, 0, 1, 0, 14)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (36, N'Caroline Mai', NULL, NULL, NULL, N'Caroline Mai', N'784F', NULL, 0, 1, 0, 14)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (37, N'Anabel Tran', NULL, NULL, NULL, N'Anabel Tran', N'12345', NULL, 0, 1, 0, 14)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (65, N'This is a test account', N'0123456789', CAST(N'1994-01-22' AS Date), N'testuser@abcMail.com', N'testuser', N'123', NULL, 0, 1, 0, 14)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (66, N'This is a test account', N'0123456789', CAST(N'1992-04-22' AS Date), N'testuser@abcMail.com', N'Test Name 2', N'123', NULL, 0, 1, 0, 14)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (70, N'Phạm Thanh Tùng', NULL, NULL, NULL, N'tungpt1', N'123456', NULL, 0, 1, 0, 14)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (74, N'Phạm Thanh Tùng', NULL, NULL, NULL, N'tungpt2', N'123456', NULL, 0, 1, 0, 14)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (75, N'This is a test account', N'0123456789', NULL, N'testuser@abcMail.com', N'Test Name 123', N'123', NULL, 0, 1, 0, 14)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (76, N'kkk111', N'0123456789', CAST(N'2004-04-22' AS Date), N'testuser@abcMail.com', N'Test Name 1234', N'123', NULL, 0, 1, 0, 14)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (77, N'kkk111', N'0123456789', NULL, N'testuser@abcMail.com', N'Test Name 12345', N'123', NULL, 0, 1, 0, 14)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (78, N'kkk111', N'0123456789', NULL, N'testuser@abcMail.com', N'Test Name 123453', N'123', NULL, 0, 1, 0, 14)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (79, N'kkk111', N'0123456789', NULL, N'testuser@abcMail.com', N'Test Name 1234531', N'123', NULL, 0, 1, 0, 14)
INSERT [dbo].[User] ([ID], [Name], [Phone], [Birthdate], [Email], [Username], [Password], [Avatar], [IsAdmin], [IsActive], [IsManager], [TeamID]) VALUES (84, N'K33', N'1278588522', NULL, N'testuser@abcMail.com', N'Team USer test', N'123', NULL, 0, 1, 0, 14)
SET IDENTITY_INSERT [dbo].[UserProject] ON 

INSERT [dbo].[UserProject] ([ID], [UserID], [ProjectID]) VALUES (1, 3, 1)
INSERT [dbo].[UserProject] ([ID], [UserID], [ProjectID]) VALUES (2, 16, 1)
INSERT [dbo].[UserProject] ([ID], [UserID], [ProjectID]) VALUES (3, 1, 1)
INSERT [dbo].[UserProject] ([ID], [UserID], [ProjectID]) VALUES (4, 18, 6)
INSERT [dbo].[UserProject] ([ID], [UserID], [ProjectID]) VALUES (5, 17, 6)
INSERT [dbo].[UserProject] ([ID], [UserID], [ProjectID]) VALUES (6, 20, 6)
INSERT [dbo].[UserProject] ([ID], [UserID], [ProjectID]) VALUES (7, 2, 11)
INSERT [dbo].[UserProject] ([ID], [UserID], [ProjectID]) VALUES (8, 12, 11)
INSERT [dbo].[UserProject] ([ID], [UserID], [ProjectID]) VALUES (9, 1, 11)
INSERT [dbo].[UserProject] ([ID], [UserID], [ProjectID]) VALUES (10, 13, 14)
INSERT [dbo].[UserProject] ([ID], [UserID], [ProjectID]) VALUES (11, 14, 14)
INSERT [dbo].[UserProject] ([ID], [UserID], [ProjectID]) VALUES (12, 15, 14)
INSERT [dbo].[UserProject] ([ID], [UserID], [ProjectID]) VALUES (13, 7, 1002)
INSERT [dbo].[UserProject] ([ID], [UserID], [ProjectID]) VALUES (14, 32, 1002)
INSERT [dbo].[UserProject] ([ID], [UserID], [ProjectID]) VALUES (15, 31, 1002)
INSERT [dbo].[UserProject] ([ID], [UserID], [ProjectID]) VALUES (16, 34, 1008)
INSERT [dbo].[UserProject] ([ID], [UserID], [ProjectID]) VALUES (17, 33, 1008)
INSERT [dbo].[UserProject] ([ID], [UserID], [ProjectID]) VALUES (18, 35, 1008)
INSERT [dbo].[UserProject] ([ID], [UserID], [ProjectID]) VALUES (19, 4, 1011)
INSERT [dbo].[UserProject] ([ID], [UserID], [ProjectID]) VALUES (20, 25, 1011)
INSERT [dbo].[UserProject] ([ID], [UserID], [ProjectID]) VALUES (21, 26, 1011)
INSERT [dbo].[UserProject] ([ID], [UserID], [ProjectID]) VALUES (22, 3, 1)
INSERT [dbo].[UserProject] ([ID], [UserID], [ProjectID]) VALUES (23, 16, 1)
INSERT [dbo].[UserProject] ([ID], [UserID], [ProjectID]) VALUES (24, 1, 1)
INSERT [dbo].[UserProject] ([ID], [UserID], [ProjectID]) VALUES (25, 18, 6)
INSERT [dbo].[UserProject] ([ID], [UserID], [ProjectID]) VALUES (26, 17, 6)
INSERT [dbo].[UserProject] ([ID], [UserID], [ProjectID]) VALUES (27, 20, 6)
INSERT [dbo].[UserProject] ([ID], [UserID], [ProjectID]) VALUES (28, 2, 11)
INSERT [dbo].[UserProject] ([ID], [UserID], [ProjectID]) VALUES (29, 12, 11)
INSERT [dbo].[UserProject] ([ID], [UserID], [ProjectID]) VALUES (30, 1, 11)
INSERT [dbo].[UserProject] ([ID], [UserID], [ProjectID]) VALUES (31, 13, 14)
INSERT [dbo].[UserProject] ([ID], [UserID], [ProjectID]) VALUES (32, 14, 14)
INSERT [dbo].[UserProject] ([ID], [UserID], [ProjectID]) VALUES (33, 15, 14)
INSERT [dbo].[UserProject] ([ID], [UserID], [ProjectID]) VALUES (34, 7, 1002)
INSERT [dbo].[UserProject] ([ID], [UserID], [ProjectID]) VALUES (35, 32, 1002)
INSERT [dbo].[UserProject] ([ID], [UserID], [ProjectID]) VALUES (36, 31, 1002)
INSERT [dbo].[UserProject] ([ID], [UserID], [ProjectID]) VALUES (37, 34, 1008)
INSERT [dbo].[UserProject] ([ID], [UserID], [ProjectID]) VALUES (38, 33, 1008)
INSERT [dbo].[UserProject] ([ID], [UserID], [ProjectID]) VALUES (39, 35, 1008)
INSERT [dbo].[UserProject] ([ID], [UserID], [ProjectID]) VALUES (40, 4, 1011)
INSERT [dbo].[UserProject] ([ID], [UserID], [ProjectID]) VALUES (41, 25, 1011)
INSERT [dbo].[UserProject] ([ID], [UserID], [ProjectID]) VALUES (42, 26, 1011)
SET IDENTITY_INSERT [dbo].[UserProject] OFF
INSERT [dbo].[UserTask] ([ID], [TaskID], [UserID], [IsFollow], [IsAssigned]) VALUES (1, 2, 1, 0, 1)
INSERT [dbo].[UserTask] ([ID], [TaskID], [UserID], [IsFollow], [IsAssigned]) VALUES (2, 2, 1, 0, 1)
SET IDENTITY_INSERT [dbo].[UserTeam] ON 

INSERT [dbo].[UserTeam] ([ID], [TeamID], [UserID]) VALUES (1, 6, 2)
INSERT [dbo].[UserTeam] ([ID], [TeamID], [UserID]) VALUES (2, 6, 1)
INSERT [dbo].[UserTeam] ([ID], [TeamID], [UserID]) VALUES (3, 6, 9)
INSERT [dbo].[UserTeam] ([ID], [TeamID], [UserID]) VALUES (4, 6, 10)
INSERT [dbo].[UserTeam] ([ID], [TeamID], [UserID]) VALUES (5, 6, 11)
INSERT [dbo].[UserTeam] ([ID], [TeamID], [UserID]) VALUES (6, 6, 12)
INSERT [dbo].[UserTeam] ([ID], [TeamID], [UserID]) VALUES (7, 6, 13)
INSERT [dbo].[UserTeam] ([ID], [TeamID], [UserID]) VALUES (8, 6, 14)
INSERT [dbo].[UserTeam] ([ID], [TeamID], [UserID]) VALUES (9, 6, 15)
INSERT [dbo].[UserTeam] ([ID], [TeamID], [UserID]) VALUES (10, 10, 3)
INSERT [dbo].[UserTeam] ([ID], [TeamID], [UserID]) VALUES (11, 10, 16)
INSERT [dbo].[UserTeam] ([ID], [TeamID], [UserID]) VALUES (12, 10, 17)
INSERT [dbo].[UserTeam] ([ID], [TeamID], [UserID]) VALUES (13, 10, 18)
INSERT [dbo].[UserTeam] ([ID], [TeamID], [UserID]) VALUES (14, 10, 19)
INSERT [dbo].[UserTeam] ([ID], [TeamID], [UserID]) VALUES (15, 10, 20)
INSERT [dbo].[UserTeam] ([ID], [TeamID], [UserID]) VALUES (16, 10, 21)
INSERT [dbo].[UserTeam] ([ID], [TeamID], [UserID]) VALUES (17, 11, 22)
INSERT [dbo].[UserTeam] ([ID], [TeamID], [UserID]) VALUES (18, 11, 23)
INSERT [dbo].[UserTeam] ([ID], [TeamID], [UserID]) VALUES (19, 11, 24)
INSERT [dbo].[UserTeam] ([ID], [TeamID], [UserID]) VALUES (20, 11, 25)
INSERT [dbo].[UserTeam] ([ID], [TeamID], [UserID]) VALUES (21, 11, 26)
INSERT [dbo].[UserTeam] ([ID], [TeamID], [UserID]) VALUES (22, 11, 27)
INSERT [dbo].[UserTeam] ([ID], [TeamID], [UserID]) VALUES (23, 11, 28)
INSERT [dbo].[UserTeam] ([ID], [TeamID], [UserID]) VALUES (24, 11, 29)
INSERT [dbo].[UserTeam] ([ID], [TeamID], [UserID]) VALUES (25, 14, 31)
INSERT [dbo].[UserTeam] ([ID], [TeamID], [UserID]) VALUES (26, 14, 32)
INSERT [dbo].[UserTeam] ([ID], [TeamID], [UserID]) VALUES (27, 14, 33)
INSERT [dbo].[UserTeam] ([ID], [TeamID], [UserID]) VALUES (28, 14, 34)
INSERT [dbo].[UserTeam] ([ID], [TeamID], [UserID]) VALUES (29, 14, 35)
INSERT [dbo].[UserTeam] ([ID], [TeamID], [UserID]) VALUES (30, 14, 36)
INSERT [dbo].[UserTeam] ([ID], [TeamID], [UserID]) VALUES (31, 14, 37)
INSERT [dbo].[UserTeam] ([ID], [TeamID], [UserID]) VALUES (32, 11, 4)
INSERT [dbo].[UserTeam] ([ID], [TeamID], [UserID]) VALUES (33, 14, 7)
INSERT [dbo].[UserTeam] ([ID], [TeamID], [UserID]) VALUES (34, 14, 0)
INSERT [dbo].[UserTeam] ([ID], [TeamID], [UserID]) VALUES (70, 6, 65)
INSERT [dbo].[UserTeam] ([ID], [TeamID], [UserID]) VALUES (71, 6, 66)
INSERT [dbo].[UserTeam] ([ID], [TeamID], [UserID]) VALUES (73, 6, 70)
INSERT [dbo].[UserTeam] ([ID], [TeamID], [UserID]) VALUES (74, 6, 74)
INSERT [dbo].[UserTeam] ([ID], [TeamID], [UserID]) VALUES (75, 6, 75)
INSERT [dbo].[UserTeam] ([ID], [TeamID], [UserID]) VALUES (76, 6, 76)
INSERT [dbo].[UserTeam] ([ID], [TeamID], [UserID]) VALUES (77, 6, 77)
INSERT [dbo].[UserTeam] ([ID], [TeamID], [UserID]) VALUES (78, 6, 78)
INSERT [dbo].[UserTeam] ([ID], [TeamID], [UserID]) VALUES (79, 6, 79)
SET IDENTITY_INSERT [dbo].[UserTeam] OFF
ALTER TABLE [dbo].[Attachment]  WITH CHECK ADD  CONSTRAINT [FK_Attachment_Task] FOREIGN KEY([TaskID])
REFERENCES [dbo].[Task] ([ID])
GO
ALTER TABLE [dbo].[Attachment] CHECK CONSTRAINT [FK_Attachment_Task]
GO
ALTER TABLE [dbo].[CheckList]  WITH CHECK ADD  CONSTRAINT [FK_CheckList_Task] FOREIGN KEY([TaskID])
REFERENCES [dbo].[Task] ([ID])
GO
ALTER TABLE [dbo].[CheckList] CHECK CONSTRAINT [FK_CheckList_Task]
GO
ALTER TABLE [dbo].[CheckListItem]  WITH CHECK ADD  CONSTRAINT [FK_CheckListItem_CheckList] FOREIGN KEY([CheckListID])
REFERENCES [dbo].[CheckList] ([ID])
GO
ALTER TABLE [dbo].[CheckListItem] CHECK CONSTRAINT [FK_CheckListItem_CheckList]
GO
ALTER TABLE [dbo].[Comment]  WITH CHECK ADD  CONSTRAINT [FK_Comment_Task] FOREIGN KEY([TaskID])
REFERENCES [dbo].[Task] ([ID])
GO
ALTER TABLE [dbo].[Comment] CHECK CONSTRAINT [FK_Comment_Task]
GO
ALTER TABLE [dbo].[List]  WITH CHECK ADD  CONSTRAINT [FK_Stage_Project] FOREIGN KEY([ProjectID])
REFERENCES [dbo].[Project] ([ID])
GO
ALTER TABLE [dbo].[List] CHECK CONSTRAINT [FK_Stage_Project]
GO
ALTER TABLE [dbo].[NotificationUser]  WITH CHECK ADD  CONSTRAINT [FK_NotificationUser_Notification] FOREIGN KEY([NotificationID])
REFERENCES [dbo].[Notification] ([ID])
GO
ALTER TABLE [dbo].[NotificationUser] CHECK CONSTRAINT [FK_NotificationUser_Notification]
GO
ALTER TABLE [dbo].[NotificationUser]  WITH CHECK ADD  CONSTRAINT [FK_NotificationUser_User] FOREIGN KEY([UserID])
REFERENCES [dbo].[User] ([ID])
GO
ALTER TABLE [dbo].[NotificationUser] CHECK CONSTRAINT [FK_NotificationUser_User]
GO
ALTER TABLE [dbo].[Project]  WITH CHECK ADD  CONSTRAINT [FK_Project_User] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[User] ([ID])
GO
ALTER TABLE [dbo].[Project] CHECK CONSTRAINT [FK_Project_User]
GO
ALTER TABLE [dbo].[Project]  WITH CHECK ADD  CONSTRAINT [FK_Project_User1] FOREIGN KEY([ChangedBy])
REFERENCES [dbo].[User] ([ID])
GO
ALTER TABLE [dbo].[Project] CHECK CONSTRAINT [FK_Project_User1]
GO
ALTER TABLE [dbo].[Task]  WITH CHECK ADD  CONSTRAINT [FK_Task_List] FOREIGN KEY([ListID])
REFERENCES [dbo].[List] ([ID])
GO
ALTER TABLE [dbo].[Task] CHECK CONSTRAINT [FK_Task_List]
GO
ALTER TABLE [dbo].[Task]  WITH CHECK ADD  CONSTRAINT [FK_Task_User] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[User] ([ID])
GO
ALTER TABLE [dbo].[Task] CHECK CONSTRAINT [FK_Task_User]
GO
ALTER TABLE [dbo].[TaskDependency]  WITH CHECK ADD  CONSTRAINT [FK_TaskDependency_Task] FOREIGN KEY([SourceTaskID])
REFERENCES [dbo].[Task] ([ID])
GO
ALTER TABLE [dbo].[TaskDependency] CHECK CONSTRAINT [FK_TaskDependency_Task]
GO
ALTER TABLE [dbo].[TaskDependency]  WITH CHECK ADD  CONSTRAINT [FK_TaskDependency_Task1] FOREIGN KEY([DestinationTaskID])
REFERENCES [dbo].[Task] ([ID])
GO
ALTER TABLE [dbo].[TaskDependency] CHECK CONSTRAINT [FK_TaskDependency_Task1]
GO
ALTER TABLE [dbo].[Team]  WITH CHECK ADD  CONSTRAINT [FK_Team_User] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[User] ([ID])
GO
ALTER TABLE [dbo].[Team] CHECK CONSTRAINT [FK_Team_User]
GO
ALTER TABLE [dbo].[TeamProject]  WITH CHECK ADD  CONSTRAINT [FK_TeamProject_Project] FOREIGN KEY([ProjectID])
REFERENCES [dbo].[Project] ([ID])
GO
ALTER TABLE [dbo].[TeamProject] CHECK CONSTRAINT [FK_TeamProject_Project]
GO
ALTER TABLE [dbo].[TeamProject]  WITH CHECK ADD  CONSTRAINT [FK_TeamProject_Team] FOREIGN KEY([TeamID])
REFERENCES [dbo].[Team] ([ID])
GO
ALTER TABLE [dbo].[TeamProject] CHECK CONSTRAINT [FK_TeamProject_Team]
GO
ALTER TABLE [dbo].[User]  WITH CHECK ADD  CONSTRAINT [FK_User_Team] FOREIGN KEY([TeamID])
REFERENCES [dbo].[Team] ([ID])
GO
ALTER TABLE [dbo].[User] CHECK CONSTRAINT [FK_User_Team]
GO
ALTER TABLE [dbo].[UserProject]  WITH CHECK ADD  CONSTRAINT [FK_UserProject_Project1] FOREIGN KEY([ProjectID])
REFERENCES [dbo].[Project] ([ID])
GO
ALTER TABLE [dbo].[UserProject] CHECK CONSTRAINT [FK_UserProject_Project1]
GO
ALTER TABLE [dbo].[UserProject]  WITH CHECK ADD  CONSTRAINT [FK_UserProject_User] FOREIGN KEY([UserID])
REFERENCES [dbo].[User] ([ID])
GO
ALTER TABLE [dbo].[UserProject] CHECK CONSTRAINT [FK_UserProject_User]
GO
ALTER TABLE [dbo].[UserTask]  WITH CHECK ADD  CONSTRAINT [FK_UserTask_Task] FOREIGN KEY([TaskID])
REFERENCES [dbo].[Task] ([ID])
GO
ALTER TABLE [dbo].[UserTask] CHECK CONSTRAINT [FK_UserTask_Task]
GO
ALTER TABLE [dbo].[UserTask]  WITH CHECK ADD  CONSTRAINT [FK_UserTask_User] FOREIGN KEY([UserID])
REFERENCES [dbo].[User] ([ID])
GO
ALTER TABLE [dbo].[UserTask] CHECK CONSTRAINT [FK_UserTask_User]
GO
ALTER TABLE [dbo].[UserTeam]  WITH CHECK ADD  CONSTRAINT [FK_UserTeam_Team] FOREIGN KEY([TeamID])
REFERENCES [dbo].[Team] ([ID])
GO
ALTER TABLE [dbo].[UserTeam] CHECK CONSTRAINT [FK_UserTeam_Team]
GO
ALTER TABLE [dbo].[UserTeam]  WITH CHECK ADD  CONSTRAINT [FK_UserTeam_User] FOREIGN KEY([UserID])
REFERENCES [dbo].[User] ([ID])
GO
ALTER TABLE [dbo].[UserTeam] CHECK CONSTRAINT [FK_UserTeam_User]
GO
