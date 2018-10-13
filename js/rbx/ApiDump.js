/* eslint-disable */
"use strict"

const ApiDump = (() => {
	const Data = {
		Categories: [
			"Appearance","Behavior","Data","Derived Data","Shape","Goals","Thrust","Turn","Camera","Image","Attachments","Compliance","AlignOrientation","AlignPosition","BallSocket","Limits","TwistLimits","Hinge","Servo","Motor","Derived","LineForce","Rod","Rope","Slider","Cylinder","AngularLimits","AngularServo","AngularMotor","Spring","Torque","VectorForce","Localization","Text","Scrolling","State","Control","Game","Surface Inputs","Surface","Part ","Teams","Forcefield","Link","Motion","Particles","Emission","JobInfo","Input","Parts"
		],
		Enums: [
			["TextureMode",["Stretch","Wrap","Static"]],["CameraType",["Fixed","Attach","Watch","Track","Follow","Custom","Scriptable","Orbital"]],["BodyPart",["Head","Torso","LeftArm","RightArm","LeftLeg","RightLeg"]],["ActuatorType",["None","Motor","Servo"]],["ActuatorRelativeTo",["Attachment0","Attachment1","World"]],["MeshType",["Head","Torso","Wedge","Sphere","Cylinder","FileMesh","Brick","Prism","Pyramid","ParallelRamp","RightAngleRamp","CornerWedge"]],["DialogBehaviorType",["SinglePlayer","MultiplePlayers"]],["DialogPurpose",["Quest","Help","Shop"]],["DialogTone",["Neutral","Friendly","Enemy"]],["ExplosionType",["NoCraters","Craters","CratersAndDebris"]],["NormalId",["Right","Top","Back","Left","Bottom","Front"]],["InOut",["Edge","Inset","Center"]],["LeftRight",["Left","Center","Right"]],["TopBottom",["Top","Center","Bottom"]],["SizeConstraint",["RelativeXY","RelativeXX","RelativeYY"]],["FrameStyle",["Custom","ChatBlue","RobloxSquare","RobloxRound","ChatGreen","ChatRed","DropShadow"]],["ButtonStyle",["Custom","RobloxButtonDefault","RobloxButton","RobloxRoundButton","RobloxRoundDefaultButton","RobloxRoundDropdownButton"]],["ScaleType",["Stretch","Slice","Tile","Fit","Crop"]],["Font",["Legacy","Arial","ArialBold","SourceSans","SourceSansBold","SourceSansLight","SourceSansItalic","Bodoni","Garamond","Cartoon","Code","Highway","SciFi","Arcade","Fantasy","Antique","SourceSansSemibold"]],["FontSize",["Size8","Size9","Size10","Size11","Size12","Size14","Size18","Size24","Size36","Size48","Size28","Size32","Size42","Size60","Size96"]],["TextTruncate",["None","AtEnd"]],["TextXAlignment",["Left","Right","Center"]],["TextYAlignment",["Top","Center","Bottom"]],["ElasticBehavior",["WhenScrollable","Always","Never"]],["ScrollBarInset",["None","ScrollBar","Always"]],["ScrollingDirection",["X","Y",,"XY"]],["VerticalScrollBarPosition",["Right","Left"]],["ZIndexBehavior",["Global","Sibling"]],["HandlesStyle",["Resize","Movement"]],["BinType",["Script","GameTool","Grab","Clone","Hammer"]],["HumanoidDisplayDistanceType",["Viewer","Subject","None"]],["Material",{256:"Plastic",272:"SmoothPlastic",288:"Neon",512:"Wood",528:"WoodPlanks",784:"Marble",788:"Basalt",800:"Slate",804:"CrackedLava",816:"Concrete",820:"Limestone",832:"Granite",836:"Pavement",848:"Brick",864:"Pebble",880:"Cobblestone",896:"Rock",912:"Sandstone",1040:"CorrodedMetal",1056:"DiamondPlate",1072:"Foil",1088:"Metal",1280:"Grass",1284:"LeafyGrass",1296:"Sand",1312:"Fabric",1328:"Snow",1344:"Mud",1360:"Ground",1376:"Asphalt",1392:"Salt",1536:"Ice",1552:"Glacier",1568:"Glass",1792:"Air",2048:"Water"}],["HumanoidHealthDisplayType",["DisplayWhenDamaged","AlwaysOn","AlwaysOff"]],["NameOcclusion",["NoOcclusion","EnemyOcclusion","OccludeAll"]],["HumanoidRigType",["R6","R15"]],["AnimationPriority",{0:"Idle",1:"Movement",2:"Action",1000:"Core"}],["SurfaceType",["Smooth","Glue","Weld","Studs","Inlet","Universal","Hinge","Motor","SteppingMotor",,"SmoothNoOutlines"]],["InputType",{0:"NoInput",12:"Constant",13:"Sin"}],["FormFactor",["Symmetric","Brick","Plate","Custom"]],["PartType",["Ball","Block","Cylinder"]],["CollisionFidelity",["Default","Hull","Box"]],["RenderFidelity",["Automatic","Precise"]],["Style",["AlternatingSupports","BridgeStyleSupports","NoSupports"]],["PoseEasingDirection",["In","Out","InOut"]],["PoseEasingStyle",["Linear","Constant","Elastic","Cubic","Bounce"]],["CreatorType",["User","Group"]],["GearGenreSetting",["AllGenres","MatchingGenreOnly"]],["Genre",["All","TownAndCity","Fantasy","SciFi","Ninja","Scary","Pirate","Adventure","Sports","Funny","WildWest","War","SkatePark","Tutorial"]],["RollOffMode",["Inverse","Linear","LinearSquare","InverseTapered"]],["AspectType",["FitWithinMaxSize","ScaleWithParentSize"]],["DominantAxis",["Width","Height"]],["FillDirection",["Horizontal","Vertical"]],["HorizontalAlignment",["Center","Left","Right"]],["SortOrder",["Name","Custom","LayoutOrder"]],["VerticalAlignment",["Center","Top","Bottom"]],["StartCorner",["TopLeft","TopRight","BottomLeft","BottomRight"]],["EasingDirection",["In","Out","InOut"]],["EasingStyle",["Linear","Sine","Back","Quad","Quart","Quint","Bounce","Elastic"]],["TableMajorAxis",["RowMajor","ColumnMajor"]]
		],
		Classes: [
			["Instance",{Archivable:1,ClassName:2,DataCost:2,Name:2,Parent:2,RobloxLocked:2,className:2,ClassName:2,Archivable:1}],["Accoutrement",{AttachmentForward:0,AttachmentPoint:0,AttachmentPos:0,AttachmentRight:0,AttachmentUp:0},[2,32]],["Accessory",1,,[3,32]],["Hat",1,,[3,45]],["Animation",{AnimationId:2},[22,60]],["AnimationController",,[22,60]],["Attachment",{Axis:3,CFrame:2,Orientation:2,Position:2,Rotation:2,SecondaryAxis:3,Visible:0,WorldAxis:3,WorldCFrame:3,WorldOrientation:3,WorldPosition:3,WorldRotation:3,WorldSecondaryAxis:3},[3,81]],["Beam",{Attachment0:4,Attachment1:4,Color:0,CurveSize0:4,CurveSize1:4,Enabled:0,FaceCamera:4,LightEmission:0,LightInfluence:0,Segments:4,Texture:0,TextureLength:0,TextureMode:[],TextureSpeed:0,Transparency:0,Width0:4,Width1:4,ZOffset:0},[3,96]],["BindableEvent",,[5,67]],["BindableFunction",,[4,66]],["BodyAngularVelocity",{AngularVelocity:5,MaxTorque:5,P:5,angularvelocity:5,maxTorque:5},[14,14]],["BodyForce",{Force:5,force:5},[14,14]],["BodyGyro",{CFrame:5,D:5,MaxTorque:5,P:5,cframe:5,maxTorque:5},[14,14]],["BodyPosition",{D:5,MaxForce:5,P:5,Position:5,maxForce:5,position:5},[14,14]],["BodyThrust",{Force:5,Location:5,force:5,location:5},[14,14]],["BodyVelocity",{MaxForce:5,P:5,Velocity:5,maxForce:5,velocity:5},[14,14]],["RocketPropulsion",{CartoonFactor:5,MaxSpeed:6,MaxThrust:6,MaxTorque:7,Target:5,TargetOffset:5,TargetRadius:5,ThrustD:6,ThrustP:6,TurnD:7,TurnP:7},[14,14]],["Button",{ClickableWhenViewportHidden:0,Enabled:0,Icon:0}],["Camera",{CFrame:2,CameraSubject:8,CameraType:[8,1],FieldOfView:2,Focus:2,HeadLocked:2,HeadScale:2,NearPlaneZ:2,ViewportSize:2,focus:2},[0,5]],["BodyColors",{HeadColor:0,HeadColor3:0,LeftArmColor:0,LeftArmColor3:0,LeftLegColor:0,LeftLegColor3:0,RightArmColor:0,RightArmColor3:0,RightLegColor:0,RightLegColor3:0,TorsoColor:0,TorsoColor3:0},2],["CharacterMesh",{BaseTextureId:2,BodyPart:[2,2],MeshId:2,OverlayTextureId:2},[22,60]],["Clothing",,2],["Pants",21,{PantsTemplate:0},[2,44]],["Shirt",21,{ShirtTemplate:0},[2,43]],["ShirtGraphic",{Graphic:0},[2,40]],["Skin",{SkinColor:0},2],["ClickDetector",{CursorIcon:9,MaxActivationDistance:2},[3,41]],["Configuration",,[22,58]],["Constraint",{Attachment0:10,Attachment1:10,Color:0,Enabled:1,Visible:0},[3,86]],["AlignOrientation",28,{MaxAngularVelocity:11,MaxTorque:11,PrimaryAxisOnly:12,ReactionTorqueEnabled:12,Responsiveness:11,RigidityEnabled:12},[3,82]],["AlignPosition",28,{ApplyAtCenterOfMass:13,MaxForce:11,MaxVelocity:11,ReactionForceEnabled:13,Responsiveness:11,RigidityEnabled:13},[3,82]],["BallSocketConstraint",28,{LimitsEnabled:14,Radius:0,Restitution:15,TwistLimitsEnabled:15,TwistLowerAngle:16,TwistUpperAngle:16,UpperAngle:15},[3,86]],["HingeConstraint",28,{ActuatorType:[17,3],AngularSpeed:18,AngularVelocity:19,CurrentAngle:20,LimitsEnabled:17,LowerAngle:15,MotorMaxAcceleration:19,MotorMaxTorque:19,Radius:0,Restitution:15,ServoMaxTorque:18,TargetAngle:18,UpperAngle:15},[3,87]],["LineForce",28,{ApplyAtCenterOfMass:21,InverseSquareLaw:21,Magnitude:21,MaxForce:21,ReactionForceEnabled:21},[3,82]],["RodConstraint",28,{CurrentDistance:20,Length:22,Thickness:0},[3,90]],["RopeConstraint",28,{CurrentDistance:20,Length:23,Restitution:23,Thickness:0},[3,89]],["SlidingBallConstraint",28,{ActuatorType:[24,3],CurrentPosition:20,LimitsEnabled:24,LowerLimit:15,MotorMaxAcceleration:19,MotorMaxForce:19,Restitution:15,ServoMaxForce:18,Size:0,Speed:18,TargetPosition:18,UpperLimit:15,Velocity:19},[3,88]],["CylindricalConstraint",36,{AngularActuatorType:[25,3],AngularLimitsEnabled:25,AngularRestitution:26,AngularSpeed:27,AngularVelocity:28,CurrentAngle:20,InclinationAngle:25,LowerAngle:26,MotorMaxAngularAcceleration:28,MotorMaxTorque:28,RotationAxisVisible:0,ServoMaxTorque:27,TargetAngle:27,UpperAngle:26,WorldRotationAxis:20},[3,95]],["PrismaticConstraint",36,,[3,88]],["SpringConstraint",28,{Coils:0,CurrentLength:20,Damping:29,FreeLength:29,LimitsEnabled:29,MaxForce:29,MaxLength:15,MinLength:15,Radius:0,Stiffness:29,Thickness:0},[3,91]],["Torque",28,{RelativeTo:[30,4],Torque:30},[3,82]],["VectorForce",28,{ApplyAtCenterOfMass:31,Force:31,RelativeTo:[31,4]},[3,82]],["CustomEvent",,[3,4]],["CustomEventReceiver",{Source:2},[3,4]],["DataModelMesh",{Offset:2,Scale:2,VertexColor:2}],["BevelMesh",44],["BlockMesh",44,,[3,8]],["CylinderMesh",44,,[3,8]],["FileMesh",44,{MeshId:2,TextureId:2}],["SpecialMesh",48,{MeshType:[2,5]},[3,8]],["Dialog",{BehaviorType:[2,6],ConversationDistance:2,GoodbyeChoiceActive:2,GoodbyeDialog:2,InUse:2,InitialPrompt:2,Purpose:[2,7],Tone:[2,8],TriggerDistance:2,TriggerOffset:2},[22,62]],["DialogChoice",{GoodbyeChoiceActive:2,GoodbyeDialog:2,ResponseDialog:2,UserDialog:2},[22,63]],["Explosion",{BlastPressure:2,BlastRadius:2,DestroyJointRadiusPercent:2,ExplosionType:[2,9],Position:2,Visible:2},[3,36]],["FaceInstance",{Face:[2,10]}],["Decal",53,{Color3:0,Shiny:0,Specular:0,Texture:0,Transparency:0},[4,7]],["Texture",54,{StudsPerTileU:0,StudsPerTileV:0},[4,10]],["Feature",{FaceId:[2,10],InOut:[2,11],LeftRight:[2,12],TopBottom:[2,13]},2],["Hole",56,,2],["MotorFeature",56],["Fire",{Color:2,Enabled:2,Heat:2,SecondaryColor:2,Size:2,size:2},[3,61]],["Folder",,[1,77]],["ForceField",{Visible:2},[3,37]],["GuiBase2d",{AbsolutePosition:2,AbsoluteRotation:2,AbsoluteSize:2,AutoLocalize:32,RootLocalizationTable:32}],["GuiObject",62,{Active:2,AnchorPoint:2,BackgroundColor3:2,BackgroundTransparency:2,BorderColor3:2,BorderSizePixel:2,ClipsDescendants:1,Draggable:1,LayoutOrder:2,NextSelectionDown:1,NextSelectionLeft:1,NextSelectionRight:1,NextSelectionUp:1,Position:2,Rotation:2,Selectable:2,SelectionImageObject:0,Size:2,SizeConstraint:[2,14],Visible:2,ZIndex:2}],["Frame",63,{Style:[2,15]},[15,48]],["GuiButton",63,{AutoButtonColor:2,Modal:2,Selected:2,Style:[2,16]},[16,52]],["ImageButton",65,{HoverImage:9,Image:9,ImageColor3:9,ImageRectOffset:9,ImageRectSize:9,ImageTransparency:9,IsLoaded:9,PressedImage:9,ScaleType:[9,17],SliceCenter:9,SliceScale:9,TileSize:9},[16,52]],["TextButton",65,{Font:[33,18],FontSize:[33,19],LineHeight:33,Text:33,TextBounds:33,TextColor3:33,TextFits:33,TextScaled:33,TextSize:33,TextStrokeColor3:33,TextStrokeTransparency:33,TextTransparency:33,TextTruncate:[33,20],TextWrap:33,TextWrapped:33,TextXAlignment:[33,21],TextYAlignment:[33,22]},[17,51]],["GuiLabel",63],["ImageLabel",63,{Image:9,ImageColor3:9,ImageRectOffset:9,ImageRectSize:9,ImageTransparency:9,IsLoaded:9,ScaleType:[9,17],SliceCenter:9,SliceScale:9,TileSize:9},[18,49]],["TextLabel",63,{Font:[33,18],FontSize:[33,19],LineHeight:33,Text:33,TextBounds:33,TextColor3:33,TextFits:33,TextScaled:33,TextSize:33,TextStrokeColor3:33,TextStrokeTransparency:33,TextTransparency:33,TextTruncate:[33,20],TextWrap:33,TextWrapped:33,TextXAlignment:[33,21],TextYAlignment:[33,22]},[19,50]],["ScrollingFrame",63,{AbsoluteWindowSize:34,BottomImage:34,CanvasPosition:34,CanvasSize:34,ElasticBehavior:[34,23],HorizontalScrollBarInset:[34,24],MidImage:34,ScrollBarImageColor3:34,ScrollBarImageTransparency:34,ScrollBarThickness:34,ScrollingDirection:[34,25],ScrollingEnabled:34,TopImage:34,VerticalScrollBarInset:[34,24],VerticalScrollBarPosition:[34,26]},[15,48]],["TextBox",63,{ClearTextOnFocus:2,Font:[33,18],FontSize:[33,19],LineHeight:33,ManualFocusRelease:2,MultiLine:2,OverlayNativeInput:2,PlaceholderColor3:33,PlaceholderText:33,ShowNativeInput:2,Text:33,TextBounds:33,TextColor3:33,TextFits:33,TextScaled:33,TextSize:33,TextStrokeColor3:33,TextStrokeTransparency:33,TextTransparency:33,TextTruncate:[33,20],TextWrap:33,TextWrapped:33,TextXAlignment:[33,21],TextYAlignment:[33,22]},[17,51]],["LayerCollector",62,{Enabled:2,ResetOnSpawn:2,ZIndexBehavior:[2,27]}],["BillboardGui",73,{Active:2,Adornee:2,AlwaysOnTop:2,ClipsDescendants:1,ExtentsOffset:2,ExtentsOffsetWorldSpace:2,LightInfluence:2,MaxDistance:2,PlayerToHideFrom:2,Size:2,SizeOffset:2,StudsOffset:2,StudsOffsetWorldSpace:2},[14,64]],["ScreenGui",73,{DisplayOrder:2,IgnoreGuiInset:2},[14,47]],["GuiMain",75,,[14,47]],["SurfaceGui",73,{Active:2,Adornee:2,AlwaysOnTop:2,CanvasSize:2,ClipsDescendants:1,Face:[2,10],LightInfluence:2,ToolPunchThroughDistance:2,ZOffset:0},[14,64]],["GuiBase3d",{Color3:0,Transparency:0,Visible:2}],["FloorWire",78,{CycleOffset:2,From:2,StudsBetweenTextures:2,Texture:0,TextureSize:0,To:2,Velocity:2,WireRadius:2},[3,4]],["PVAdornment",78,{Adornee:2}],["HandleAdornment",80,{AlwaysOnTop:2,CFrame:2,SizeRelativeOffset:2,ZIndex:2}],["BoxHandleAdornment",81,{Size:2}],["ConeHandleAdornment",81,{Height:2,Radius:2}],["CylinderHandleAdornment",81,{Height:2,Radius:2}],["ImageHandleAdornment",81,{Image:2,Size:2}],["LineHandleAdornment",81,{Length:2,Thickness:2}],["SphereHandleAdornment",81,{Radius:2}],["ParabolaAdornment",80,{A:2,B:2,C:2,Range:2,Thickness:2}],["SelectionBox",80,{LineThickness:0,SurfaceColor3:0,SurfaceTransparency:0},[21,54]],["SelectionSphere",80,{SurfaceColor3:0,SurfaceTransparency:0},[21,54]],["PartAdornment",78,{Adornee:2}],["HandlesBase",91],["ArcHandles",91,{Axes:2},[20,56]],["Handles",91,{Faces:2,Style:[,28]},[19,53]],["SurfaceSelection",91,{TargetSurface:[2,10]},[21,55]],["SelectionLasso",78,{Humanoid:2}],["SelectionPartLasso",96,{Part:2},[22,57]],["SelectionPointLasso",96,{Point:2},[22,57]],["Backpack",,[3,20]],["BackpackItem",{TextureId:2},2],["HopperBin",100,{Active:2,BinType:[2,29]},[24,22]],["Tool",100,{CanBeDropped:1,Enabled:35,Grip:0,GripForward:0,GripPos:0,GripRight:0,GripUp:0,ManualActivationOnly:1,RequiresHandle:1,ToolTip:0},[3,17]],["Flag",102,{TeamColor:2},[3,38]],["Humanoid",{AutoJumpEnabled:36,AutoRotate:36,AutomaticScalingEnabled:37,CameraOffset:2,DisplayDistanceType:[2,30],FloorMaterial:[36,31],Health:37,HealthDisplayDistance:2,HealthDisplayType:[2,32],HipHeight:37,Jump:36,JumpPower:37,MaxHealth:37,MaxSlopeAngle:37,MoveDirection:36,NameDisplayDistance:2,NameOcclusion:[2,33],PlatformStand:36,RigType:[2,34],RootPart:2,SeatPart:36,Sit:36,TargetPoint:36,WalkSpeed:37,WalkToPart:36,WalkToPoint:36,maxHealth:37},[3,9]],["JointInstance",{C0:2,C1:2,Part0:2,Part1:2},[20,34]],["DynamicRotate",105,{BaseAngle:2}],["RotateP",106],["RotateV",106],["Glue",105,{F0:2,F1:2,F2:2,F3:2}],["ManualSurfaceJointInstance",105],["ManualGlue",105],["ManualWeld",105],["Motor",105,{CurrentAngle:2,DesiredAngle:2,MaxVelocity:2},2],["Motor6D",113],["Rotate",105],["Snap",105,,[20,34]],["VelocityMotor",105,{CurrentAngle:2,DesiredAngle:2,Hole:2,MaxVelocity:2}],["Weld",105,,[20,34]],["Keyframe",{Time:2},[22,60]],["KeyframeSequence",{Loop:2,Priority:[2,35]}],["Light",{Brightness:0,Color:0,Enabled:0,Shadows:0},[3,13]],["PointLight",121,{Range:0},[3,13]],["SpotLight",121,{Angle:0,Face:[,10],Range:0},[3,13]],["SurfaceLight",121,{Angle:0,Face:[,10],Range:0},[3,13]],["LocalizationTable",{SourceLocaleId:32},[3,97]],["LuaSourceContainer",{CurrentEditor:2}],["BaseScript",126,{Disabled:1,LinkedSource:2}],["CoreScript",127],["Script",127,{Source:2},[3,6]],["LocalScript",129,,[4,18]],["ModuleScript",126,{LinkedSource:2,Source:2},[5,76]],["Message",{Text:0},[11,33]],["Hint",132,,[11,33]],["BasePart",{Anchored:1,BackParamA:38,BackParamB:38,BackSurface:[39,36],BackSurfaceInput:[38,37],BottomParamA:38,BottomParamB:38,BottomSurface:[39,36],BottomSurfaceInput:[38,37],BrickColor:0,CFrame:2,CanCollide:1,CenterOfMass:2,CollisionGroupId:1,Color:0,CustomPhysicalProperties:40,FrontParamA:38,FrontParamB:38,FrontSurface:[39,36],FrontSurfaceInput:[38,37],LeftParamA:38,LeftParamB:38,LeftSurface:[39,36],LeftSurfaceInput:[38,37],Locked:1,Material:[,31],Orientation:2,Position:2,Reflectance:0,ResizeIncrement:1,ResizeableFaces:1,RightParamA:38,RightParamB:38,RightSurface:[39,36],RightSurfaceInput:[38,37],RotVelocity:2,Rotation:2,Size:40,SpecificGravity:2,TopParamA:38,TopParamB:38,TopSurface:[39,36],TopSurfaceInput:[38,37],Transparency:0,Velocity:2,brickColor:0},-1],["CornerWedgePart",134,,[12,1]],["FormFactorPart",134,{FormFactor:[40,38]}],["Part",136,{Shape:[40,39]},[11,1]],["FlagStand",137,{TeamColor:2},[3,39]],["Platform",137,,[3,35]],["Seat",137,{Disabled:36,Occupant:36},[3,35]],["SkateboardPlatform",137,{Controller:36,ControllingHumanoid:36,Steer:36,StickyWheels:36,Throttle:36},[3,35]],["SpawnLocation",137,{AllowTeamChangeOnTouch:41,Duration:42,Enabled:1,Neutral:41,TeamColor:41},[3,25]],["WedgePart",136,,[12,1]],["MeshPart",134,{CollisionFidelity:[1,40],MeshID:0,MeshId:0,TextureID:0},[2,73]],["PartOperation",134,{CollisionFidelity:[1,40],RenderFidelity:[1,41],TriangleCount:2,UsePartColor:2}],["NegateOperation",145,,[2,72]],["UnionOperation",145,,[2,73]],["Terrain",134,{IsSmooth:2,MaterialColors:0,MaxExtents:2,WaterColor:0,WaterReflectance:0,WaterTransparency:0,WaterWaveSize:0,WaterWaveSpeed:0},[0,65]],["TrussPart",134,{Style:[40,42]},[12,1]],["VehicleSeat",134,{AreHingesDetected:36,Disabled:36,HeadsUpDisplay:36,MaxSpeed:36,Occupant:36,Steer:36,SteerFloat:36,Throttle:36,ThrottleFloat:36,Torque:36,TurnSpeed:36},[3,35]],["Model",{PrimaryPart:2},[10,2]],["Status",151,,[10,2]],["PackageLink",{PackageId:43,VersionNumber:43},[1,98]],["ParticleEmitter",{Acceleration:44,Color:0,Drag:45,EmissionDirection:[46,10],Enabled:46,Lifetime:46,LightEmission:0,LightInfluence:0,LockedToPart:45,Rate:46,RotSpeed:46,Rotation:46,Size:0,Speed:46,SpreadAngle:46,Texture:0,Transparency:0,VelocityInheritance:45,VelocitySpread:46,ZOffset:0},[3,80]],["PlayerScripts",,[13,78]],["PluginDragEvent",{Data:2,MimeType:2,Position:2,Sender:2}],["Pose",{CFrame:2,EasingDirection:[2,43],EasingStyle:[2,44],MaskWeight:2,Weight:2},[22,60]],["PostEffect",{Enabled:35}],["BloomEffect",158,{Intensity:35,Size:35,Threshold:35},[2,83]],["BlurEffect",158,{Size:35},[2,83]],["ColorCorrectionEffect",158,{Brightness:35,Contrast:35,Saturation:35,TintColor:35},[2,83]],["SunRaysEffect",158,{Intensity:35,Spread:35},[2,83]],["RemoteEvent",,[5,75]],["RemoteFunction",,[4,74]],["DataModel",{CreatorId:35,CreatorType:[35,45],GameId:35,GearGenreSetting:[35,46],Genre:[35,47],IsSFFlagsLoaded:2,JobId:47,PlaceId:35,PlaceVersion:35,PrivateServerId:2,PrivateServerOwnerId:2,Workspace:2,lighting:2,workspace:2}],["Sky",{CelestialBodiesShown:0,MoonAngularSize:0,MoonTextureId:0,SkyboxBk:0,SkyboxDn:0,SkyboxFt:0,SkyboxLf:0,SkyboxRt:0,SkyboxUp:0,StarCount:0,SunAngularSize:0,SunTextureId:0},[0,28]],["Smoke",{Color:2,Enabled:2,Opacity:2,RiseVelocity:2,Size:2},[3,59]],["Sound",{EmitterSize:2,IsLoaded:2,IsPaused:2,IsPlaying:2,Looped:2,MaxDistance:2,MinDistance:2,Pitch:2,PlayOnRemove:1,PlaybackLoudness:2,PlaybackSpeed:2,Playing:2,RollOffMode:[2,48],SoundGroup:2,SoundId:2,TimeLength:2,TimePosition:2,Volume:2,isPlaying:2},[1,11]],["SoundEffect",{Enabled:35,Priority:35}],["ChorusSoundEffect",169,{Depth:35,Mix:35,Rate:35},[2,84]],["CompressorSoundEffect",169,{Attack:35,GainMakeup:35,Ratio:35,Release:35,SideChain:35,Threshold:35},[2,84]],["DistortionSoundEffect",169,{Level:35},[2,84]],["EchoSoundEffect",169,{Delay:35,DryLevel:35,Feedback:35,WetLevel:35},[2,84]],["EqualizerSoundEffect",169,{HighGain:35,LowGain:35,MidGain:35},[2,84]],["FlangeSoundEffect",169,{Depth:35,Mix:35,Rate:35},[2,84]],["PitchShiftSoundEffect",169,{Octave:35},[2,84]],["ReverbSoundEffect",169,{DecayTime:35,Density:35,Diffusion:35,DryLevel:35,WetLevel:35},[2,84]],["TremoloSoundEffect",169,{Depth:35,Duty:35,Frequency:35},[2,84]],["SoundGroup",{Volume:35},[2,85]],["Sparkles",{Enabled:2,SparkleColor:2},[3,42]],["StarterGear",,[3,20]],["StarterPlayerScripts",,[13,78]],["StarterCharacterScripts",182,,[13,78]],["Team",{AutoAssignable:2,AutoColorCharacters:2,Score:2,TeamColor:2},[1,24]],["TerrainRegion",{IsSmooth:2,SizeInCells:2},[2,65]],["TouchTransmitter",,[3,37]],["Trail",{Attachment0:2,Attachment1:2,Color:0,Enabled:46,FaceCamera:0,Lifetime:46,LightEmission:0,LightInfluence:0,MaxLength:46,MinLength:46,Texture:0,TextureLength:0,TextureMode:[],Transparency:0,WidthScale:46},[3,93]],["UIAspectRatioConstraint",{AspectRatio:1,AspectType:[1,49],DominantAxis:[1,50]},[3,26]],["UISizeConstraint",{MaxSize:1,MinSize:1},[3,26]],["UITextSizeConstraint",{MaxTextSize:1,MinTextSize:1},[3,26]],["UIGridStyleLayout",{AbsoluteContentSize:2,FillDirection:[1,51],HorizontalAlignment:[1,52],SortOrder:[1,53],VerticalAlignment:[1,54]}],["UIGridLayout",191,{CellPadding:0,CellSize:0,FillDirectionMaxCells:1,StartCorner:[1,55]},[3,26]],["UIListLayout",191,{Padding:0},[3,26]],["UIPageLayout",191,{Animated:0,Circular:0,CurrentPage:2,EasingDirection:[,56],EasingStyle:[,57],GamepadInputEnabled:48,Padding:0,ScrollWheelInputEnabled:48,TouchInputEnabled:48,TweenTime:0},[3,26]],["UITableLayout",191,{FillEmptySpaceColumns:0,FillEmptySpaceRows:0,MajorAxis:[1,58],Padding:0},[3,26]],["UIPadding",{PaddingBottom:1,PaddingLeft:1,PaddingRight:1,PaddingTop:1},[3,26]],["UIScale",{Scale:1},[3,26]],["ValueBase",,[3,4]],["BinaryStringValue",198],["BoolValue",198,{Value:2},[3,4]],["BrickColorValue",198,{Value:2},[3,4]],["CFrameValue",198,{Value:2},[3,4]],["Color3Value",198,{Value:2},[3,4]],["DoubleConstrainedValue",198,{MaxValue:2,MinValue:2,Value:2},[3,4]],["IntConstrainedValue",198,{MaxValue:2,MinValue:2,Value:2},[3,4]],["IntValue",198,{Value:2},[3,4]],["NumberValue",198,{Value:2},[3,4]],["ObjectValue",198,{Value:2},[3,4]],["RayValue",198,{Value:2},[3,4]],["StringValue",198,{Value:2},[3,4]],["Vector3Value",198,{Value:2},[3,4]],["WeldConstraint",{Enabled:1,Part0:49,Part1:49},[3,94]]
		]
	}

	const BrickColors = {
		1:"White",2:"Grey",3:"Light yellow",5:"Brick yellow",6:"Light green (Mint)",9:"Light reddish violet",11:"Pastel Blue",12:"Light orange brown",18:"Nougat",21:"Bright red",22:"Med. reddish violet",23:"Bright blue",24:"Bright yellow",25:"Earth orange",26:"Black",27:"Dark grey",28:"Dark green",29:"Medium green",36:"Lig. Yellowich orange",37:"Bright green",38:"Dark orange",39:"Light bluish violet",40:"Transparent",41:"Tr. Red",42:"Tr. Lg blue",43:"Tr. Blue",44:"Tr. Yellow",45:"Light blue",47:"Tr. Flu. Reddish orange",48:"Tr. Green",49:"Tr. Flu. Green",50:"Phosph. White",100:"Light red",101:"Medium red",102:"Medium blue",103:"Light grey",104:"Bright violet",105:"Br. yellowish orange",106:"Bright orange",107:"Bright bluish green",108:"Earth yellow",110:"Bright bluish violet",111:"Tr. Brown",112:"Medium bluish violet",113:"Tr. Medi. reddish violet",115:"Med. yellowish green",116:"Med. bluish green",118:"Light bluish green",119:"Br. yellowish green",120:"Lig. yellowish green",121:"Med. yellowish orange",123:"Br. reddish orange",124:"Bright reddish violet",125:"Light orange",126:"Tr. Bright bluish violet",127:"Gold",128:"Dark nougat",131:"Silver",133:"Neon orange",134:"Neon green",135:"Sand blue",136:"Sand violet",137:"Medium orange",138:"Sand yellow",140:"Earth blue",141:"Earth green",143:"Tr. Flu. Blue",145:"Sand blue metallic",146:"Sand violet metallic",147:"Sand yellow metallic",148:"Dark grey metallic",149:"Black metallic",150:"Light grey metallic",151:"Sand green",153:"Sand red",154:"Dark red",157:"Tr. Flu. Yellow",158:"Tr. Flu. Red",168:"Gun metallic",176:"Red flip/flop",178:"Yellow flip/flop",179:"Silver flip/flop",180:"Curry",190:"Fire Yellow",191:"Flame yellowish orange",192:"Reddish brown",193:"Flame reddish orange",194:"Medium stone grey",195:"Royal blue",196:"Dark Royal blue",198:"Bright reddish lilac",199:"Dark stone grey",200:"Lemon metalic",208:"Light stone grey",209:"Dark Curry",210:"Faded green",211:"Turquoise",212:"Light Royal blue",213:"Medium Royal blue",216:"Rust",217:"Brown",218:"Reddish lilac",219:"Lilac",220:"Light lilac",221:"Bright purple",222:"Light purple",223:"Light pink",224:"Light brick yellow",225:"Warm yellowish orange",226:"Cool yellow",232:"Dove blue",268:"Medium lilac",301:"Slime green",302:"Smoky grey",303:"Dark blue",304:"Parsley green",305:"Steel blue",306:"Storm blue",307:"Lapis",308:"Dark indigo",309:"Sea green",310:"Shamrock",311:"Fossil",312:"Mulberry",313:"Forest green",314:"Cadet blue",315:"Electric blue",316:"Eggplant",317:"Moss",318:"Artichoke",319:"Sage green",320:"Ghost grey",321:"Lilac",322:"Plum",323:"Olivine",324:"Laurel green",325:"Quill grey",327:"Crimson",328:"Mint",329:"Baby blue",330:"Carnation pink",331:"Persimmon",332:"Maroon",333:"Gold",334:"Daisy orange",335:"Pearl",336:"Fog",337:"Salmon",338:"Terra Cotta",339:"Cocoa",340:"Wheat",341:"Buttermilk",342:"Mauve",343:"Sunrise",344:"Tawny",345:"Rust",346:"Cashmere",347:"Khaki",348:"Lily white",349:"Seashell",350:"Burgundy",351:"Cork",352:"Burlap",353:"Beige",354:"Oyster",355:"Pine Cone",356:"Fawn brown",357:"Hurricane grey",358:"Cloudy grey",359:"Linen",360:"Copper",361:"Dirt brown",362:"Bronze",363:"Flint",364:"Dark taupe",365:"Burnt Sienna",1001:"Institutional white",1002:"Mid gray",1003:"Really black",1004:"Really red",1005:"Deep orange",1006:"Alder",1007:"Dusty Rose",1008:"Olive",1009:"New Yeller",1010:"Really blue",1011:"Navy blue",1012:"Deep blue",1013:"Cyan",1014:"CGA brown",1015:"Magenta",1016:"Pink",1017:"Deep orange",1018:"Teal",1019:"Toothpaste",1020:"Lime green",1021:"Camo",1022:"Grime",1023:"Lavender",1024:"Pastel light blue",1025:"Pastel orange",1026:"Pastel violet",1027:"Pastel blue-green",1028:"Pastel green",1029:"Pastel yellow",1030:"Pastel brown",1031:"Royal purple",1032:"Hot pink"
	}
	
	const ZeroClassName = Data.Classes[0][0]
	let isPrepared = false
	const prepare = () => {
		if(isPrepared) { return }
		isPrepared = true

		const enums = Data.Enums
		const enumDict = Data.Enums = {}
		enums.forEach(([name, items]) => enumDict[name] = items)

		const classes = Data.Classes
		const classDict = Data.Classes = {}
		classes.forEach(([className, superClass, members, rmd]) => {
			if(typeof superClass !== "number") {
				rmd = members
				members = superClass
				superClass = null
			}

			superClass = classes[superClass || 0][0]
			superClass = className === superClass ? null : classDict[superClass]
			
			if(members) {
				Object.entries(members).forEach(([prop, value]) => {
					if(typeof value === "number") {
						members[prop] = {
							Group: value === -1 ? "HIDDEN" : Data.Categories[value]
						}
					} else {
						const [cat, enumType] = value
	
						members[prop] = {
							Group: cat === -1 ? "HIDDEN" : Data.Categories[cat || 0],
							Enum: enums[enumType || 0][1]
						}
					}
				})
			}

			classDict[className] = {
				Name: className,
				Superclass: superClass,
				Members: members,
				ExplorerOrder: typeof rmd === "number" ? rmd : rmd ? rmd[0] : undefined,
				ExplorerIcon: Array.isArray(rmd) ? rmd[1] : undefined
			}
		})
	}

	const getPropInfo = (className, prop) => {
		prepare()
		let target = Data.Classes[className] || Data.Classes[ZeroClassName]

		while(target) {
			if(target.Members) {
				const propInfo = target.Members[prop]
				if(propInfo) { return propInfo }
			}
			target = target.Superclass
		}

		return null
	}

	return {
		getEnum(name) {
			prepare()
			return Data.Enums[name]
		},
		getPropertyGroup(className, prop) {
			prepare()
			const propInfo = getPropInfo(className, prop)
			return propInfo ? propInfo.Group : IS_DEV_MODE ? "Unknown" : "Data"
		},
		getPropertyEnumName(className, prop, value) {
			prepare()
			const propInfo = getPropInfo(className, prop)
			return (propInfo && propInfo.Enum) ? propInfo.Enum[value] : null
		},
		getBrickColorName(value) {
			return BrickColors[value]
		},
		getExplorerIconIndex(className) {
			prepare()
			const data = Data.Classes[className]
			if(data && data.ExplorerIcon !== undefined) { return data.ExplorerIcon }
			return 0
		},
		getExplorerOrder(className) {
			prepare()
			const data = Data.Classes[className]
			if(data && data.ExplorerOrder !== undefined) { return data.ExplorerOrder }
			return -1
		}
	}
})()