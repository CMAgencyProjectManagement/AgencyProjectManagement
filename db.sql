USE [master]
GO
/****** Object:  Database [marketingagency]    Script Date: 2/7/2018 8:44:40 AM ******/
CREATE DATABASE [marketingagency]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'MarketingAgencyCM', FILENAME = N'c:\databases\marketingagency\marketingagency.mdf' , SIZE = 4096KB , MAXSIZE = 20971520KB , FILEGROWTH = 10%)
 LOG ON 
( NAME = N'MarketingAgencyCM_log', FILENAME = N'c:\databases\marketingagency\marketingagency_log.ldf' , SIZE = 7616KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
GO
ALTER DATABASE [marketingagency] SET COMPATIBILITY_LEVEL = 120
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [marketingagency].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [marketingagency] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [marketingagency] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [marketingagency] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [marketingagency] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [marketingagency] SET ARITHABORT OFF 
GO
ALTER DATABASE [marketingagency] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [marketingagency] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [marketingagency] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [marketingagency] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [marketingagency] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [marketingagency] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [marketingagency] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [marketingagency] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [marketingagency] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [marketingagency] SET  DISABLE_BROKER 
GO
ALTER DATABASE [marketingagency] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [marketingagency] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [marketingagency] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [marketingagency] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [marketingagency] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [marketingagency] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [marketingagency] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [marketingagency] SET RECOVERY FULL 
GO
ALTER DATABASE [marketingagency] SET  MULTI_USER 
GO
ALTER DATABASE [marketingagency] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [marketingagency] SET DB_CHAINING OFF 
GO
ALTER DATABASE [marketingagency] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [marketingagency] SET TARGET_RECOVERY_TIME = 0 SECONDS 
GO
ALTER DATABASE [marketingagency] SET DELAYED_DURABILITY = DISABLED 
GO
EXEC sys.sp_db_vardecimal_storage_format N'marketingagency', N'ON'
GO
ALTER DATABASE [marketingagency] SET QUERY_STORE = OFF
GO
USE [marketingagency]
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET LEGACY_CARDINALITY_ESTIMATION = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET MAXDOP = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET PARAMETER_SNIFFING = PRIMARY;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION FOR SECONDARY SET QUERY_OPTIMIZER_HOTFIXES = PRIMARY;
GO
USE [marketingagency]
GO
/****** Object:  Table [dbo].[Attachment]    Script Date: 2/7/2018 8:44:47 AM ******/
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
/****** Object:  Table [dbo].[CheckList]    Script Date: 2/7/2018 8:44:49 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CheckList](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](255) NOT NULL,
	[TaskID] [int] NOT NULL,
 CONSTRAINT [PK_CheckList] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CheckListItem]    Script Date: 2/7/2018 8:44:49 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CheckListItem](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](255) NOT NULL,
	[IsChecked] [bit] NOT NULL,
	[CheckListID] [int] NOT NULL,
 CONSTRAINT [PK_CheckListItem] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Comment]    Script Date: 2/7/2018 8:44:50 AM ******/
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
 CONSTRAINT [PK_Comment] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Label]    Script Date: 2/7/2018 8:44:51 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Label](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](255) NOT NULL,
	[Color] [char](7) NOT NULL,
	[ProjectID] [int] NOT NULL,
 CONSTRAINT [PK_Label] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[LabelTask]    Script Date: 2/7/2018 8:44:51 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LabelTask](
	[LabelD] [int] NOT NULL,
	[TaskID] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[List]    Script Date: 2/7/2018 8:44:52 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[List](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[ProjectID] [int] NOT NULL,
	[Name] [nvarchar](255) NOT NULL,
 CONSTRAINT [PK_Stage] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Project]    Script Date: 2/7/2018 8:44:53 AM ******/
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
 CONSTRAINT [PK_Project] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Task]    Script Date: 2/7/2018 8:44:53 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Task](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](255) NOT NULL,
	[Description] [text] NULL,
	[CreatedBy] [int] NOT NULL,
	[CreatedTime] [datetime] NOT NULL,
	[ChangedBy] [int] NULL,
	[ChangedTime] [datetime] NULL,
	[Status] [int] NOT NULL,
	[Duration] [bigint] NOT NULL,
	[ListID] [int] NOT NULL,
	[Priority] [int] NULL,
	[StartDate] [datetime] NULL,
 CONSTRAINT [PK_Task] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TaskDependency]    Script Date: 2/7/2018 8:44:54 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TaskDependency](
	[SourceTaskID] [int] NOT NULL,
	[DestinationTaskID] [int] NOT NULL,
	[DependencyType] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Team]    Script Date: 2/7/2018 8:44:55 AM ******/
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
/****** Object:  Table [dbo].[TeamProject]    Script Date: 2/7/2018 8:44:55 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TeamProject](
	[TeamID] [int] NOT NULL,
	[ProjectID] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User]    Script Date: 2/7/2018 8:44:56 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[ID] [int] NOT NULL,
	[Username] [nvarchar](255) NOT NULL,
	[Password] [nvarchar](255) NOT NULL,
	[Avatar] [nvarchar](255) NULL,
	[IsAdmin] [bit] NOT NULL,
 CONSTRAINT [PK_User] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserProject]    Script Date: 2/7/2018 8:44:56 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserProject](
	[UserID] [int] NOT NULL,
	[ProjectID] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserTask]    Script Date: 2/7/2018 8:44:57 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserTask](
	[TaskID] [int] NOT NULL,
	[UserID] [int] IDENTITY(1,1) NOT NULL,
	[IsFollow] [bit] NOT NULL,
	[IsAssigned] [bit] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserTeam]    Script Date: 2/7/2018 8:44:58 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserTeam](
	[TeamID] [int] NOT NULL,
	[UserID] [int] NOT NULL,
	[IsManager] [bit] NOT NULL
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Project] ON 

INSERT [dbo].[Project] ([ID], [Name], [Description], [Deadline], [CreatedTime], [CreatedBy], [StartDate], [ChangedBy], [ChangedTime]) VALUES (1, N'Marketing plan for X Coffee shop', N'X Coffee Shops has just begun business, and marketing is essential to its success and future profitability.  The bar offers a place for people to meet in a comfortable, person-meeting environment.  The basic market need is place where singles can meet new similar people.  X Coffee Shops uses a sophisticated conversation system to enhance and facilitate singles meeting each other.

', NULL, CAST(N'2013-05-12T00:00:00.000' AS DateTime), 3, NULL, 16, CAST(N'2013-07-12T00:00:00.000' AS DateTime))
INSERT [dbo].[Project] ([ID], [Name], [Description], [Deadline], [CreatedTime], [CreatedBy], [StartDate], [ChangedBy], [ChangedTime]) VALUES (6, N'Finding clients for A company', N'.  Find design clients for graphic design company, find out about some small/medium businesses in the area, working for freelancing sites.

', NULL, CAST(N'2015-05-11T00:00:00.000' AS DateTime), 18, NULL, 17, CAST(N'2015-08-11T00:00:00.000' AS DateTime))
INSERT [dbo].[Project] ([ID], [Name], [Description], [Deadline], [CreatedTime], [CreatedBy], [StartDate], [ChangedBy], [ChangedTime]) VALUES (11, N'Develop idea
 for Nha Nam', N'Develop idea
 for book selling brand, •	Develop for Book focus, book title, book subtitle, book topic.', NULL, CAST(N'2013-11-17T00:00:00.000' AS DateTime), 2, NULL, 12, CAST(N'2013-11-20T00:00:00.000' AS DateTime))
INSERT [dbo].[Project] ([ID], [Name], [Description], [Deadline], [CreatedTime], [CreatedBy], [StartDate], [ChangedBy], [ChangedTime]) VALUES (14, N'Promotional content for company X', N'Writing content promotional content for company X', NULL, CAST(N'2014-12-10T00:00:00.000' AS DateTime), 13, NULL, 14, CAST(N'2015-01-10T00:00:00.000' AS DateTime))
INSERT [dbo].[Project] ([ID], [Name], [Description], [Deadline], [CreatedTime], [CreatedBy], [StartDate], [ChangedBy], [ChangedTime]) VALUES (1002, N'Strategic business plan', N'Written document that pairs the objectives of a company with the needs of the market place. Although a strategic business plan contains similar elements of a traditional plan, a strategic plan takes planning a step further by not only defining company goals but utilizing those goals to take advantage of available business opportunities. This is achieved by carefully analyzing a particular business industry and being honest about your company''s strength and weakness in meeting the needs of the industry.', NULL, CAST(N'2014-07-12T00:00:00.000' AS DateTime), 7, NULL, 32, CAST(N'2014-08-12T00:00:00.000' AS DateTime))
INSERT [dbo].[Project] ([ID], [Name], [Description], [Deadline], [CreatedTime], [CreatedBy], [StartDate], [ChangedBy], [ChangedTime]) VALUES (1008, N'Marketing Strategy Planning', N'Process that the operational and managerial staff of a company goes through to create and implement effective marketing strategies. Strategic marketing planning takes several aspects of company marketing and promotion into consideration. The aspects that contribute to strategic marketing planning include identifying promotional opportunities and evaluating the marketing opportunities; researching, analyzing and identifying the target markets; developing a strategic position for the company to pursue and how to implement the strategy; preparation and implementation of the marketing plan; and measuring and evaluating the results of the marketing efforts of the company.', NULL, CAST(N'2015-08-17T00:00:00.000' AS DateTime), 34, NULL, 33, CAST(N'2016-08-17T00:00:00.000' AS DateTime))
INSERT [dbo].[Project] ([ID], [Name], [Description], [Deadline], [CreatedTime], [CreatedBy], [StartDate], [ChangedBy], [ChangedTime]) VALUES (1011, N'Making commercials for X coffee shop', N'Collaborate with writers, web content managers, print production manager, and graphic designers to produce marketing and recruitment materials. Edit and produce videos for web content, presentations, advertising, education, media relations and other purposes.', NULL, CAST(N'2015-09-12T00:00:00.000' AS DateTime), 4, NULL, 25, CAST(N'2016-09-12T00:00:00.000' AS DateTime))
SET IDENTITY_INSERT [dbo].[Project] OFF
SET IDENTITY_INSERT [dbo].[Team] ON 

INSERT [dbo].[Team] ([ID], [Name], [CreatedBy], [CreatedDate], [IsClosed]) VALUES (6, N'Creative department', 2, CAST(N'2013-11-11' AS Date), 0)
INSERT [dbo].[Team] ([ID], [Name], [CreatedBy], [CreatedDate], [IsClosed]) VALUES (10, N'Account Management departmen', 3, CAST(N'2013-04-11' AS Date), 0)
INSERT [dbo].[Team] ([ID], [Name], [CreatedBy], [CreatedDate], [IsClosed]) VALUES (11, N'Production department', 4, CAST(N'2013-07-12' AS Date), 0)
INSERT [dbo].[Team] ([ID], [Name], [CreatedBy], [CreatedDate], [IsClosed]) VALUES (14, N'Account Planning department', 7, CAST(N'2013-08-30' AS Date), 0)
SET IDENTITY_INSERT [dbo].[Team] OFF
INSERT [dbo].[User] ([ID], [Username], [Password], [Avatar], [IsAdmin]) VALUES (1, N'Phong', N'123', NULL, 1)
INSERT [dbo].[User] ([ID], [Username], [Password], [Avatar], [IsAdmin]) VALUES (2, N'Dien Doan', N'1234', NULL, 1)
INSERT [dbo].[User] ([ID], [Username], [Password], [Avatar], [IsAdmin]) VALUES (3, N'Phat Bui', N'12345', NULL, 0)
INSERT [dbo].[User] ([ID], [Username], [Password], [Avatar], [IsAdmin]) VALUES (4, N'Tung Pham', N'123456', NULL, 0)
INSERT [dbo].[User] ([ID], [Username], [Password], [Avatar], [IsAdmin]) VALUES (7, N'Lam', N'357A', NULL, 0)
INSERT [dbo].[User] ([ID], [Username], [Password], [Avatar], [IsAdmin]) VALUES (9, N'Clark Vo', N'298B', NULL, 0)
INSERT [dbo].[User] ([ID], [Username], [Password], [Avatar], [IsAdmin]) VALUES (10, N'Hanna Truong', N'257F', NULL, 0)
INSERT [dbo].[User] ([ID], [Username], [Password], [Avatar], [IsAdmin]) VALUES (11, N'Hanna Huong', N'245D', NULL, 0)
INSERT [dbo].[User] ([ID], [Username], [Password], [Avatar], [IsAdmin]) VALUES (12, N'Kai Nguyen', N'248R', NULL, 0)
INSERT [dbo].[User] ([ID], [Username], [Password], [Avatar], [IsAdmin]) VALUES (13, N'Robben Tran', N'785R', NULL, 0)
INSERT [dbo].[User] ([ID], [Username], [Password], [Avatar], [IsAdmin]) VALUES (14, N'Kaithy Nguyen', N'784T', NULL, 0)
INSERT [dbo].[User] ([ID], [Username], [Password], [Avatar], [IsAdmin]) VALUES (15, N'Jun Pham', N'785E', NULL, 0)
INSERT [dbo].[User] ([ID], [Username], [Password], [Avatar], [IsAdmin]) VALUES (16, N'Be Tran', N'528R', NULL, 0)
INSERT [dbo].[User] ([ID], [Username], [Password], [Avatar], [IsAdmin]) VALUES (17, N'Erik Lu ', N'784W', NULL, 0)
INSERT [dbo].[User] ([ID], [Username], [Password], [Avatar], [IsAdmin]) VALUES (18, N'Harry Lu', N'784B', NULL, 0)
INSERT [dbo].[User] ([ID], [Username], [Password], [Avatar], [IsAdmin]) VALUES (19, N'Hary Won', N'418G', NULL, 0)
INSERT [dbo].[User] ([ID], [Username], [Password], [Avatar], [IsAdmin]) VALUES (20, N'Marcus Truong', N'784F', NULL, 0)
INSERT [dbo].[User] ([ID], [Username], [Password], [Avatar], [IsAdmin]) VALUES (21, N'Khanh Truong', N'741T', NULL, 0)
INSERT [dbo].[User] ([ID], [Username], [Password], [Avatar], [IsAdmin]) VALUES (22, N'Kyle Hoang', N'783Q', NULL, 0)
INSERT [dbo].[User] ([ID], [Username], [Password], [Avatar], [IsAdmin]) VALUES (23, N'Luke Nguyen', N'784Z', NULL, 0)
INSERT [dbo].[User] ([ID], [Username], [Password], [Avatar], [IsAdmin]) VALUES (24, N'Blank Tran', N'174U', NULL, 0)
INSERT [dbo].[User] ([ID], [Username], [Password], [Avatar], [IsAdmin]) VALUES (25, N'Franklin Pham', N'819F', NULL, 0)
INSERT [dbo].[User] ([ID], [Username], [Password], [Avatar], [IsAdmin]) VALUES (26, N'Frank Hoang', N'784H', NULL, 0)
INSERT [dbo].[User] ([ID], [Username], [Password], [Avatar], [IsAdmin]) VALUES (27, N'Johnathan Nha Vo', N'370F', NULL, 0)
INSERT [dbo].[User] ([ID], [Username], [Password], [Avatar], [IsAdmin]) VALUES (28, N'Cani Pham', N'247E', NULL, 0)
INSERT [dbo].[User] ([ID], [Username], [Password], [Avatar], [IsAdmin]) VALUES (29, N'Patrick Vu', N'147W', NULL, 0)
INSERT [dbo].[User] ([ID], [Username], [Password], [Avatar], [IsAdmin]) VALUES (31, N'Kate Vo', N'140E', NULL, 0)
INSERT [dbo].[User] ([ID], [Username], [Password], [Avatar], [IsAdmin]) VALUES (32, N'Robert kim', N'128I', NULL, 0)
INSERT [dbo].[User] ([ID], [Username], [Password], [Avatar], [IsAdmin]) VALUES (33, N'Haye Yo', N'149K', NULL, 0)
INSERT [dbo].[User] ([ID], [Username], [Password], [Avatar], [IsAdmin]) VALUES (34, N'Carlos Nguyen', N'784J', NULL, 0)
INSERT [dbo].[User] ([ID], [Username], [Password], [Avatar], [IsAdmin]) VALUES (35, N'Carlos Mai', N'854T', NULL, 0)
INSERT [dbo].[User] ([ID], [Username], [Password], [Avatar], [IsAdmin]) VALUES (36, N'Caroline Mai', N'784F', NULL, 0)
INSERT [dbo].[User] ([ID], [Username], [Password], [Avatar], [IsAdmin]) VALUES (37, N'Anabel Tran', N'12345', NULL, 0)
INSERT [dbo].[UserProject] ([UserID], [ProjectID]) VALUES (3, 1)
INSERT [dbo].[UserProject] ([UserID], [ProjectID]) VALUES (16, 1)
INSERT [dbo].[UserProject] ([UserID], [ProjectID]) VALUES (19, 1)
INSERT [dbo].[UserProject] ([UserID], [ProjectID]) VALUES (18, 6)
INSERT [dbo].[UserProject] ([UserID], [ProjectID]) VALUES (17, 6)
INSERT [dbo].[UserProject] ([UserID], [ProjectID]) VALUES (20, 6)
INSERT [dbo].[UserProject] ([UserID], [ProjectID]) VALUES (2, 11)
INSERT [dbo].[UserProject] ([UserID], [ProjectID]) VALUES (12, 11)
INSERT [dbo].[UserProject] ([UserID], [ProjectID]) VALUES (10, 11)
INSERT [dbo].[UserProject] ([UserID], [ProjectID]) VALUES (13, 14)
INSERT [dbo].[UserProject] ([UserID], [ProjectID]) VALUES (14, 14)
INSERT [dbo].[UserProject] ([UserID], [ProjectID]) VALUES (15, 14)
INSERT [dbo].[UserProject] ([UserID], [ProjectID]) VALUES (7, 1002)
INSERT [dbo].[UserProject] ([UserID], [ProjectID]) VALUES (32, 1002)
INSERT [dbo].[UserProject] ([UserID], [ProjectID]) VALUES (31, 1002)
INSERT [dbo].[UserProject] ([UserID], [ProjectID]) VALUES (34, 1008)
INSERT [dbo].[UserProject] ([UserID], [ProjectID]) VALUES (33, 1008)
INSERT [dbo].[UserProject] ([UserID], [ProjectID]) VALUES (35, 1008)
INSERT [dbo].[UserProject] ([UserID], [ProjectID]) VALUES (4, 1011)
INSERT [dbo].[UserProject] ([UserID], [ProjectID]) VALUES (25, 1011)
INSERT [dbo].[UserProject] ([UserID], [ProjectID]) VALUES (26, 1011)
INSERT [dbo].[UserTeam] ([TeamID], [UserID], [IsManager]) VALUES (6, 2, 1)
INSERT [dbo].[UserTeam] ([TeamID], [UserID], [IsManager]) VALUES (6, 2, 0)
INSERT [dbo].[UserTeam] ([TeamID], [UserID], [IsManager]) VALUES (6, 9, 0)
INSERT [dbo].[UserTeam] ([TeamID], [UserID], [IsManager]) VALUES (6, 10, 0)
INSERT [dbo].[UserTeam] ([TeamID], [UserID], [IsManager]) VALUES (6, 11, 0)
INSERT [dbo].[UserTeam] ([TeamID], [UserID], [IsManager]) VALUES (6, 12, 0)
INSERT [dbo].[UserTeam] ([TeamID], [UserID], [IsManager]) VALUES (6, 13, 0)
INSERT [dbo].[UserTeam] ([TeamID], [UserID], [IsManager]) VALUES (6, 14, 0)
INSERT [dbo].[UserTeam] ([TeamID], [UserID], [IsManager]) VALUES (6, 15, 0)
INSERT [dbo].[UserTeam] ([TeamID], [UserID], [IsManager]) VALUES (10, 3, 1)
INSERT [dbo].[UserTeam] ([TeamID], [UserID], [IsManager]) VALUES (10, 16, 0)
INSERT [dbo].[UserTeam] ([TeamID], [UserID], [IsManager]) VALUES (10, 17, 0)
INSERT [dbo].[UserTeam] ([TeamID], [UserID], [IsManager]) VALUES (10, 18, 0)
INSERT [dbo].[UserTeam] ([TeamID], [UserID], [IsManager]) VALUES (10, 19, 0)
INSERT [dbo].[UserTeam] ([TeamID], [UserID], [IsManager]) VALUES (10, 20, 0)
INSERT [dbo].[UserTeam] ([TeamID], [UserID], [IsManager]) VALUES (10, 21, 0)
INSERT [dbo].[UserTeam] ([TeamID], [UserID], [IsManager]) VALUES (11, 22, 0)
INSERT [dbo].[UserTeam] ([TeamID], [UserID], [IsManager]) VALUES (11, 23, 0)
INSERT [dbo].[UserTeam] ([TeamID], [UserID], [IsManager]) VALUES (11, 24, 0)
INSERT [dbo].[UserTeam] ([TeamID], [UserID], [IsManager]) VALUES (11, 25, 0)
INSERT [dbo].[UserTeam] ([TeamID], [UserID], [IsManager]) VALUES (11, 26, 0)
INSERT [dbo].[UserTeam] ([TeamID], [UserID], [IsManager]) VALUES (11, 27, 1)
INSERT [dbo].[UserTeam] ([TeamID], [UserID], [IsManager]) VALUES (11, 28, 0)
INSERT [dbo].[UserTeam] ([TeamID], [UserID], [IsManager]) VALUES (11, 29, 0)
INSERT [dbo].[UserTeam] ([TeamID], [UserID], [IsManager]) VALUES (14, 31, 0)
INSERT [dbo].[UserTeam] ([TeamID], [UserID], [IsManager]) VALUES (14, 32, 1)
INSERT [dbo].[UserTeam] ([TeamID], [UserID], [IsManager]) VALUES (14, 33, 0)
INSERT [dbo].[UserTeam] ([TeamID], [UserID], [IsManager]) VALUES (14, 34, 0)
INSERT [dbo].[UserTeam] ([TeamID], [UserID], [IsManager]) VALUES (14, 35, 0)
INSERT [dbo].[UserTeam] ([TeamID], [UserID], [IsManager]) VALUES (14, 36, 0)
INSERT [dbo].[UserTeam] ([TeamID], [UserID], [IsManager]) VALUES (14, 37, 0)
INSERT [dbo].[UserTeam] ([TeamID], [UserID], [IsManager]) VALUES (11, 4, 0)
INSERT [dbo].[UserTeam] ([TeamID], [UserID], [IsManager]) VALUES (14, 7, 0)
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
ALTER TABLE [dbo].[Label]  WITH CHECK ADD  CONSTRAINT [FK_Label_Project] FOREIGN KEY([ProjectID])
REFERENCES [dbo].[Project] ([ID])
GO
ALTER TABLE [dbo].[Label] CHECK CONSTRAINT [FK_Label_Project]
GO
ALTER TABLE [dbo].[LabelTask]  WITH CHECK ADD  CONSTRAINT [FK_LabelTask_Label] FOREIGN KEY([LabelD])
REFERENCES [dbo].[Label] ([ID])
GO
ALTER TABLE [dbo].[LabelTask] CHECK CONSTRAINT [FK_LabelTask_Label]
GO
ALTER TABLE [dbo].[LabelTask]  WITH CHECK ADD  CONSTRAINT [FK_LabelTask_Task] FOREIGN KEY([TaskID])
REFERENCES [dbo].[Task] ([ID])
GO
ALTER TABLE [dbo].[LabelTask] CHECK CONSTRAINT [FK_LabelTask_Task]
GO
ALTER TABLE [dbo].[List]  WITH CHECK ADD  CONSTRAINT [FK_Stage_Project] FOREIGN KEY([ProjectID])
REFERENCES [dbo].[Project] ([ID])
GO
ALTER TABLE [dbo].[List] CHECK CONSTRAINT [FK_Stage_Project]
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
USE [master]
GO
ALTER DATABASE [marketingagency] SET  READ_WRITE 
GO
