USE [master]
GO
/****** Object:  Database [marketingagency]    Script Date: 2/1/2018 5:57:07 AM ******/
CREATE DATABASE [marketingagency]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'MarketingAgencyCM', FILENAME = N'c:\databases\marketingagency\marketingagency.mdf' , SIZE = 4096KB , MAXSIZE = 20971520KB , FILEGROWTH = 10%)
 LOG ON 
( NAME = N'MarketingAgencyCM_log', FILENAME = N'c:\databases\marketingagency\marketingagency_log.ldf' , SIZE = 5184KB , MAXSIZE = 2048GB , FILEGROWTH = 10%)
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
/****** Object:  Table [dbo].[Attachment]    Script Date: 2/1/2018 5:57:13 AM ******/
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
 CONSTRAINT [PK_Attachment] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CheckList]    Script Date: 2/1/2018 5:57:15 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CheckList](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](255) NOT NULL,
	[TaskId] [int] NOT NULL,
 CONSTRAINT [PK_CheckList] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[CheckListItem]    Script Date: 2/1/2018 5:57:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[CheckListItem](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](255) NOT NULL,
	[IsChecked] [bit] NOT NULL,
	[CheckListId] [int] NOT NULL,
 CONSTRAINT [PK_CheckListItem] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Comment]    Script Date: 2/1/2018 5:57:16 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Comment](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Body] [text] NULL,
	[CreatedBy] [int] NOT NULL,
	[CreatedDate] [date] NOT NULL,
	[ChangedDate] [date] NULL,
	[TaskID] [int] NOT NULL,
 CONSTRAINT [PK_Comment] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Label]    Script Date: 2/1/2018 5:57:17 AM ******/
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
/****** Object:  Table [dbo].[LabelTask]    Script Date: 2/1/2018 5:57:17 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[LabelTask](
	[LabelD] [int] NOT NULL,
	[TaskID] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[List]    Script Date: 2/1/2018 5:57:18 AM ******/
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
/****** Object:  Table [dbo].[Project]    Script Date: 2/1/2018 5:57:19 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Project](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](255) NOT NULL,
	[Description] [text] NULL,
	[Deadline] [date] NULL,
	[CreatedDate] [date] NOT NULL,
 CONSTRAINT [PK_Project] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Role]    Script Date: 2/1/2018 5:57:19 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Role](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](255) NOT NULL,
 CONSTRAINT [PK_Role] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Task]    Script Date: 2/1/2018 5:57:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Task](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](255) NOT NULL,
	[Description] [text] NULL,
	[CreatedBy] [datetime] NOT NULL,
	[CreatedDate] [date] NOT NULL,
	[ChangedBy] [int] NULL,
	[ChangedDate] [date] NULL,
	[Status] [int] NOT NULL,
	[Duration] [bigint] NULL,
	[ListId] [int] NOT NULL,
 CONSTRAINT [PK_Task] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TaskDependency]    Script Date: 2/1/2018 5:57:20 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TaskDependency](
	[SourceTaskId] [int] NOT NULL,
	[DestinationTaskId] [int] NOT NULL,
	[DependencyType] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Team]    Script Date: 2/1/2018 5:57:21 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Team](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](255) NOT NULL,
	[CreatedBy] [datetime] NOT NULL,
	[CreatedDate] [date] NOT NULL,
	[IsClosed] [bit] NULL,
 CONSTRAINT [PK_Team] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TeamProject]    Script Date: 2/1/2018 5:57:22 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TeamProject](
	[TeamID] [int] NOT NULL,
	[ProjectId] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[User]    Script Date: 2/1/2018 5:57:22 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[User](
	[ID] [datetime] NOT NULL,
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
/****** Object:  Table [dbo].[UserProject]    Script Date: 2/1/2018 5:57:23 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserProject](
	[UserID] [datetime] NOT NULL,
	[ProjectID] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserTask]    Script Date: 2/1/2018 5:57:23 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserTask](
	[TaskID] [int] NOT NULL,
	[UserID] [datetime] NOT NULL,
	[IsFollow] [bit] NOT NULL,
	[IsAssigned] [bit] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserTeam]    Script Date: 2/1/2018 5:57:24 AM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserTeam](
	[TeamID] [int] NOT NULL,
	[UserID] [datetime] NOT NULL,
	[IsManager] [bit] NOT NULL
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Attachment]  WITH CHECK ADD  CONSTRAINT [FK_Attachment_Task] FOREIGN KEY([TaskID])
REFERENCES [dbo].[Task] ([ID])
GO
ALTER TABLE [dbo].[Attachment] CHECK CONSTRAINT [FK_Attachment_Task]
GO
ALTER TABLE [dbo].[CheckList]  WITH CHECK ADD  CONSTRAINT [FK_CheckList_Task] FOREIGN KEY([TaskId])
REFERENCES [dbo].[Task] ([ID])
GO
ALTER TABLE [dbo].[CheckList] CHECK CONSTRAINT [FK_CheckList_Task]
GO
ALTER TABLE [dbo].[CheckListItem]  WITH CHECK ADD  CONSTRAINT [FK_CheckListItem_CheckList] FOREIGN KEY([CheckListId])
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
ALTER TABLE [dbo].[Task]  WITH CHECK ADD  CONSTRAINT [FK_Task_List] FOREIGN KEY([ListId])
REFERENCES [dbo].[List] ([ID])
GO
ALTER TABLE [dbo].[Task] CHECK CONSTRAINT [FK_Task_List]
GO
ALTER TABLE [dbo].[Task]  WITH CHECK ADD  CONSTRAINT [FK_Task_User] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[User] ([ID])
GO
ALTER TABLE [dbo].[Task] CHECK CONSTRAINT [FK_Task_User]
GO
ALTER TABLE [dbo].[TaskDependency]  WITH CHECK ADD  CONSTRAINT [FK_TaskDependency_Task] FOREIGN KEY([SourceTaskId])
REFERENCES [dbo].[Task] ([ID])
GO
ALTER TABLE [dbo].[TaskDependency] CHECK CONSTRAINT [FK_TaskDependency_Task]
GO
ALTER TABLE [dbo].[TaskDependency]  WITH CHECK ADD  CONSTRAINT [FK_TaskDependency_Task1] FOREIGN KEY([DestinationTaskId])
REFERENCES [dbo].[Task] ([ID])
GO
ALTER TABLE [dbo].[TaskDependency] CHECK CONSTRAINT [FK_TaskDependency_Task1]
GO
ALTER TABLE [dbo].[Team]  WITH CHECK ADD  CONSTRAINT [FK_Team_User] FOREIGN KEY([CreatedBy])
REFERENCES [dbo].[User] ([ID])
GO
ALTER TABLE [dbo].[Team] CHECK CONSTRAINT [FK_Team_User]
GO
ALTER TABLE [dbo].[TeamProject]  WITH CHECK ADD  CONSTRAINT [FK_TeamProject_Project] FOREIGN KEY([ProjectId])
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
